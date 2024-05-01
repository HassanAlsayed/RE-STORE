using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using RESTORE.Data;
using RESTORE.DTO;
using RESTORE.Entities;
using RESTORE.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;

namespace RESTORE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ReStoreDbContext _db;
        private readonly GenerateToken _token;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public AccountController(ReStoreDbContext db, GenerateToken token, IConfiguration configuration,IMapper mapper)
        {
            _db = db;
            _token = token;
            _configuration = configuration;
            _mapper = mapper;
        }

        [HttpPost("Register")]
        public async Task<ActionResult<UserProfile>> Register(UserDTO userDTO)
        {
            //check if email is used or not
            var EmailCount = await _db.Users.CountAsync(x => x.Email == userDTO.Email);
            if (EmailCount > 0)
            {
                throw new ArgumentException("The user already registered");
            }
            //encrypte the password
            var passwordHasher = new PasswordHasher<User>();
            var encryptedPassword = passwordHasher.HashPassword(new User(), userDTO.Password);
            //create new account
            var user = new User()
            {
                Email = userDTO.Email,
                Password = encryptedPassword,
                Name = userDTO.Name,
                Address = userDTO.Address,
                Phone = userDTO.Phone ?? "",
                Role = "client",
                CreatedAt = DateTime.Now
            };
            await _db.Users.AddAsync(user);
            await _db.SaveChangesAsync();


            var Userprofile = new UserProfile()
            {
                Id = user.Id,
                Email = user.Email,
                Name = user.Name,
                Phone = user.Phone,
                Role = user.Role,
                CreatedAt = DateTime.Now,
                Address = user.Address,
            };

            return CreatedAtAction("Register",new {id = user.Id},Userprofile);
        }
        

        [HttpPost("Login")]
        public async Task<ActionResult<(UserProfile,string)>> Login( LoginDTO login)
        {
            var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == login.Email);
            if (user is null)
            {
                return BadRequest("Email or password not valid");
            }

            var passwordHasher = new PasswordHasher<User>();

            var result = passwordHasher.VerifyHashedPassword(new User(), user.Password, login.Password);

            if (result == PasswordVerificationResult.Failed)
            {
                return BadRequest("Wrong password");
            }
             var token = GenerateJwtToken(user);

            var userProfile = new UserProfile()
            {
                Email = user.Email,
                Id = user.Id,
                Name = user.Name,
                CreatedAt = DateTime.Now,
                Phone = user.Phone,
                Address = user.Address,
                Role = user.Role,
                PictureUrl = user.PictureUrl,

            };

           
            return Ok(new {user =  userProfile, token = token });
        }

        private string GenerateJwtToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["jwtSettings:key"]!));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512);

            var claims = new[]
            {
                    new Claim("id", user.Id.ToString()),
                    new Claim(ClaimTypes.Role, user.Role)

        };

            var token = new JwtSecurityToken(
                issuer: _configuration["JwtSettings:Issuer"],
                audience: _configuration["JwtSettings:Audience"],
                claims: claims,
               expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials
            );

            var jwtToken = new JwtSecurityTokenHandler().WriteToken(token);
            return jwtToken;

        }

        [HttpGet("viewProfile/{id}")]
        public async Task<UserProfile> GetUserById(Guid id)
        {
            var user = await _db.Users.FirstOrDefaultAsync(x => x.Id == id);
            if (user is null)
            {
                throw new ArgumentException("user not found");
            }
            var userProfile = new UserProfile()
            {   Id = user.Id,
                Name = user.Name,
                Address = user.Address,
                Email = user.Email,
                Phone = user.Phone,
                Role = user.Role,
                CreatedAt = user.CreatedAt,
                PictureUrl = user.PictureUrl,
            };
            return userProfile;
        }

        [HttpPut("userProfile/update/{id}")]
        public async Task<ActionResult<User>> UpdateProfile(UpdateProfile profile, Guid id)
        {
            var user = await _db.Users.FindAsync(id);
            if (user is null)
            {
                return NotFound("user not found");
            }
        
            _mapper.Map(profile, user);
           
            await _db.SaveChangesAsync();
            return Ok(profile);
        }


    }
}
