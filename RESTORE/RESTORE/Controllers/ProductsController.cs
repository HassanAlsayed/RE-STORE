using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RESTORE.Data;
using RESTORE.DTO;
using RESTORE.Entities;
using System.Net.Mail;
using System.Net;
using Microsoft.AspNetCore.Identity;
using FirebaseAdmin.Auth;
using Microsoft.AspNetCore.Authorization;

namespace RESTORE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class ProductsController : ControllerBase
    {
        private readonly ReStoreDbContext _db;
        private readonly IMapper _mapper;

        public ProductsController(ReStoreDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        [HttpGet]
        
        public async Task<List<Product>> Products()
        {
            return await _db.Products.ToListAsync();
        }
        [HttpGet("Pagination/{page}")]
        public async Task<ActionResult<(List<Product>,int)>> Products(int page, [FromQuery] string? search, [FromQuery] string? sortBy)
        {
            var products = _db.Products.AsQueryable();


            if (!string.IsNullOrEmpty(search))
            {
                products = products.Where(x =>
                    x.Name.Contains(search) ||
                    x.Type.Contains(search) ||
                    x.Brand.Contains(search) ||
                    x.Description.Contains(search));
            }

            switch (sortBy)
            {
                case "Alphabetical":
                    products = products.OrderBy(x => x.Name);
                    break;
                case "Price-High to Low":
                    products = products.OrderByDescending(p => p.Price);
                    break;
                case "Price-Low to High":
                    products = products.OrderBy(p => p.Price);
                    break;
                default:
                    products = products.OrderBy(x => x.Id);
                    break;
            }

            int pageSize = 12;
            int totalCount = await products.CountAsync();
            int totalPages = (int)Math.Ceiling((double)totalCount / pageSize);

            page = Math.Max(1, Math.Min(page, totalPages));

            var productList = await products.Skip((page - 1) * pageSize)
                                            .Take(pageSize)
                                            .ToListAsync();

            return Ok(new { list = productList, pageNumber = totalPages });
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> Products(Guid id)
        {
            var product = await _db.Products.FindAsync(id);
            if (product is null)
            {
                return NotFound("product not found with id " + id);
            }
            return Ok(product);

        }
        [HttpPost("CreateProduct")]
        public async Task<ActionResult<Product>> CreateProduct([FromForm] ProductDTO productDTO)
        {
            var product = _mapper.Map<Product>(productDTO);
            await _db.Products.AddAsync(product);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(CreateProduct), new { id = product.Id }, productDTO);
        }

        [HttpPut("UpdateProduct")]
        public async Task<ActionResult<Product>> UpdateProduct([FromBody] UpdateProductDTO updateProductDTO)
        {
            var product = await _db.Products.FindAsync(updateProductDTO.Id);
            if (product is null)
            {
                return NotFound("Product not found");
            }
            _mapper.Map(updateProductDTO, product);
            await _db.SaveChangesAsync();
            return Ok(product);
        }


        [HttpDelete("delete/{id}")]
       
        public async Task<ActionResult<Product>> DeleteProduct([FromRoute] Guid id)
        {
            var product = await _db.Products.FindAsync(id);
            if (product is null)
            {
                return NotFound("Product not found");
            }
            _db.Products.Remove(product);
            await _db.SaveChangesAsync();
            return Ok(product);
        }

        private Email GetSmtpSettings()
        {
            return new Email
            {
                Host = "smtp.gmail.com",
                Port = 587,
                UserName = "hassan19alsayed@gmail.com",
                Password = "pppeuvlvupjxriua",
                EnableSsl = true
            };
        }
        [HttpPost("sendEmail")]
        public async Task<IActionResult> SendEmail(EmailData emailData)
        {
            if (emailData == null || string.IsNullOrWhiteSpace(emailData.From))
            {
                return BadRequest("Invalid email data");
            }

            try
            {
                var smtpSettings = GetSmtpSettings();

                using (MailMessage msg = new MailMessage())
                {
                    msg.From = new MailAddress(emailData.From);
                   
                    msg.To.Add(emailData.To);

                    msg.Subject = emailData.Subject;
                    msg.Body = emailData.Body;
                    msg.IsBodyHtml = false;

                    using (SmtpClient smtp = new SmtpClient(smtpSettings.Host, smtpSettings.Port))
                    {
                        smtp.EnableSsl = smtpSettings.EnableSsl;
                        smtp.UseDefaultCredentials = false;
                        smtp.Credentials = new NetworkCredential(smtpSettings.UserName, smtpSettings.Password);

                        await smtp.SendMailAsync(msg);
                    }

                    return Ok("Email sent successfully");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error sending email: {ex.Message}");
            }
        }


    }
}
