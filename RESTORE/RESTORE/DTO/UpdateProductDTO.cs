using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RESTORE.DTO
{
    public class UpdateProductDTO
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        public string Description { get; set; } = string.Empty;
        [Range(100, Double.PositiveInfinity)]
        [Required]
        public long Price { get; set; }
        public string PictureUrl { get; set; } = string.Empty;
        [Required]
        public string Type { get; set; } = string.Empty;
        [Required]
        public string Brand { get; set; } = string.Empty;
        [Required, Range(0, 250)]
        public int QuantityInStock { get; set; }
    }
}
