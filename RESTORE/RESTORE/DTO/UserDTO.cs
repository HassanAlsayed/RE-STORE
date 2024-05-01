using System.ComponentModel.DataAnnotations;

namespace RESTORE.DTO
{
    public class UserDTO
    {
        [Required, MaxLength(100)]
        public string Name { get; set; }
        [Required, EmailAddress, MaxLength(100)]
        public string Email { get; set; }
        [Required,MaxLength(20)]
        public string Phone { get; set; }
        [Required, MaxLength(100)]
        public string Address { get; set; }
        [Required, MinLength(8), MaxLength(100)]
        public string Password { get; set; }
    }
}
