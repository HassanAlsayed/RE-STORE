using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace RESTORE.Entities
{
    [Index("Email", IsUnique = true)]
    public class User 
    {
        public Guid Id { get; set; }
        [Required,MaxLength(100)]
        public string Name { get; set; }
        [Required,MaxLength(100)]
        public string Email { get; set; }
        [Required,MaxLength(20)]
        public string Phone { get; set; }
        [Required, MaxLength(100)]
        public string Address { get; set; }
        [Required, MaxLength(100)]
        public string Password { get; set; }
        [MaxLength(10)]
        public string Role { get; set; }
        public DateTime CreatedAt { get; set; }
        public string? PictureUrl { get; set; }
    }
}
