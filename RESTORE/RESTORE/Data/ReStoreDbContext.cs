using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RESTORE.Entities;

namespace RESTORE.Data
{
    public class ReStoreDbContext : DbContext
    {
        public ReStoreDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var products = new List<Product>
        {
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Product 1",
                Description = "Description 1",
                Price = 100,
                PictureUrl = "url_to_image_1.jpg",
                Type = "Type",
                Brand = "Brand",
                QuantityInStock = 10
            },
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Product 2",
                Description = "Description 2",
                Price = 200,
                PictureUrl = "url_to_image_2.jpg",
                Type = "Type",
                Brand = "Brand",
                QuantityInStock = 20
            },
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Product 3",
                Description = "Description 3",
                Price = 300,
                PictureUrl = "url_to_image_3.jpg",
                Type = "Type",
                Brand = "Brand",
                QuantityInStock = 30
            },
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Product 4",
                Description = "Description 4",
                Price = 400,
                PictureUrl = "url_to_image_4.jpg",
                Type = "Type",
                Brand = "Brand",
                QuantityInStock = 40
            },
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Product 5",
                Description = "Description 5",
                Price = 500,
                PictureUrl = "url_to_image_5.jpg",
                Type = "Type",
                Brand = "Brand",
                QuantityInStock = 50
            },
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Product 6",
                Description = "Description 6",
                Price = 600,
                PictureUrl = "url_to_image_6.jpg",
                Type = "Type",
                Brand = "Brand",
                QuantityInStock = 60
            },
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Product 7",
                Description = "Description 7",
                Price = 700,
                PictureUrl = "url_to_image_7.jpg",
                Type = "Type",
                Brand = "Brand",
                QuantityInStock = 70
            },
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Product 8",
                Description = "Description 8",
                Price = 800,
                PictureUrl = "url_to_image_8.jpg",
                Type = "Type",
                Brand = "Brand",
                QuantityInStock = 80
            },
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Product 9",
                Description = "Description 9",
                Price = 900,
                PictureUrl = "url_to_image_9.jpg",
                Type = "Type",
                Brand = "Brand",
                QuantityInStock = 90
            },
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Product 10",
                Description = "Description 10",
                Price = 1000,
                PictureUrl = "url_to_image_10.jpg",
                Type = "Type",
                Brand = "Brand",
                QuantityInStock = 100
            }
        };
            modelBuilder.Entity<Product>().HasData(products);

            
        }
    }
}
