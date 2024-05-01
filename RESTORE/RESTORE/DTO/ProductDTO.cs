using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RESTORE.DTO
{
    public class ProductDTO
    {

        [Required, MaxLength(30)]
        public string Name { get; set; }
        [Required, MaxLength(150)]
        public string Description { get; set; }
        [Required, Range(500, double.PositiveInfinity)]
        public long Price { get; set; }
        [Required]
        public string PictureUrl { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public string Brand { get; set; }
        [Required, Range(1, 250)]
        public int QuantityInStock { get; set; }
    }
}
