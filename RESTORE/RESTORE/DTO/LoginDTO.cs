using System.ComponentModel.DataAnnotations;

namespace RESTORE.DTO
{
    public class LoginDTO
    {
        [Required,MaxLength(100)]
        public string Email { get; set; }
        [Required,MaxLength(100)]
        public string Password { get; set; }
    }
}
