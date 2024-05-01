using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RESTORE.Migrations
{
    /// <inheritdoc />
    public partial class initail : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<long>(type: "bigint", nullable: false),
                    PictureUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Brand = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    QuantityInStock = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Address = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Role = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Brand", "Description", "Name", "PictureUrl", "Price", "QuantityInStock", "Type" },
                values: new object[,]
                {
                    { new Guid("04d02fe7-45ce-476f-aefb-9de92724dbe8"), "Brand", "Description 10", "Product 10", "url_to_image_10.jpg", 1000L, 100, "Type" },
                    { new Guid("25081ac5-9a6e-4a35-817d-e7c1a6954cca"), "Brand", "Description 5", "Product 5", "url_to_image_5.jpg", 500L, 50, "Type" },
                    { new Guid("4079f540-c514-4c2d-8e64-2b0ed27794af"), "Brand", "Description 9", "Product 9", "url_to_image_9.jpg", 900L, 90, "Type" },
                    { new Guid("42a7ff9b-53fc-4a55-b7b0-d5686cb6c265"), "Brand", "Description 8", "Product 8", "url_to_image_8.jpg", 800L, 80, "Type" },
                    { new Guid("4f8aec05-a9ae-4a0b-a994-7a4c1ce47975"), "Brand", "Description 1", "Product 1", "url_to_image_1.jpg", 100L, 10, "Type" },
                    { new Guid("554b7ed9-c8e5-47a6-9d7b-0ae09257806d"), "Brand", "Description 6", "Product 6", "url_to_image_6.jpg", 600L, 60, "Type" },
                    { new Guid("55aadf67-96b8-4c97-a9b9-5c8ebdd0e0cf"), "Brand", "Description 4", "Product 4", "url_to_image_4.jpg", 400L, 40, "Type" },
                    { new Guid("6f6f41ff-317c-48c8-9e44-73bb72a029ab"), "Brand", "Description 3", "Product 3", "url_to_image_3.jpg", 300L, 30, "Type" },
                    { new Guid("7ec67ba4-7dbe-4c91-8e18-ce149971a332"), "Brand", "Description 2", "Product 2", "url_to_image_2.jpg", 200L, 20, "Type" },
                    { new Guid("83d67377-23d5-4ec4-887d-6beced35c4de"), "Brand", "Description 7", "Product 7", "url_to_image_7.jpg", 700L, 70, "Type" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
