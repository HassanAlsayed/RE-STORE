using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RESTORE.Migrations
{
    /// <inheritdoc />
    public partial class UploadProductImage : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("04d02fe7-45ce-476f-aefb-9de92724dbe8"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("25081ac5-9a6e-4a35-817d-e7c1a6954cca"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("4079f540-c514-4c2d-8e64-2b0ed27794af"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("42a7ff9b-53fc-4a55-b7b0-d5686cb6c265"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("4f8aec05-a9ae-4a0b-a994-7a4c1ce47975"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("554b7ed9-c8e5-47a6-9d7b-0ae09257806d"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("55aadf67-96b8-4c97-a9b9-5c8ebdd0e0cf"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("6f6f41ff-317c-48c8-9e44-73bb72a029ab"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("7ec67ba4-7dbe-4c91-8e18-ce149971a332"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("83d67377-23d5-4ec4-887d-6beced35c4de"));

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Brand", "Description", "Name", "PictureUrl", "Price", "QuantityInStock", "Type" },
                values: new object[,]
                {
                    { new Guid("28312368-7d6f-49cc-8f5c-40c0f0f60d74"), "Brand", "Description 9", "Product 9", "url_to_image_9.jpg", 900L, 90, "Type" },
                    { new Guid("35808198-b71d-417e-8292-2070d8bcf459"), "Brand", "Description 3", "Product 3", "url_to_image_3.jpg", 300L, 30, "Type" },
                    { new Guid("3e91e3db-63a3-41f7-81e2-17dc7041f92e"), "Brand", "Description 7", "Product 7", "url_to_image_7.jpg", 700L, 70, "Type" },
                    { new Guid("511c12a7-6f39-4e24-bc62-450d77cfac03"), "Brand", "Description 10", "Product 10", "url_to_image_10.jpg", 1000L, 100, "Type" },
                    { new Guid("5e1ad86d-4c41-45a4-a95a-9ccb224ace60"), "Brand", "Description 4", "Product 4", "url_to_image_4.jpg", 400L, 40, "Type" },
                    { new Guid("6e685262-b634-49e6-8046-0cc9804a76a3"), "Brand", "Description 5", "Product 5", "url_to_image_5.jpg", 500L, 50, "Type" },
                    { new Guid("88dc563d-2087-4d56-bbde-1eb603d39e58"), "Brand", "Description 8", "Product 8", "url_to_image_8.jpg", 800L, 80, "Type" },
                    { new Guid("bff50538-cb79-4a3c-8634-1d794cc5b484"), "Brand", "Description 1", "Product 1", "url_to_image_1.jpg", 100L, 10, "Type" },
                    { new Guid("c9a76fa7-11a9-4ee9-8252-f8f10bc85840"), "Brand", "Description 6", "Product 6", "url_to_image_6.jpg", 600L, 60, "Type" },
                    { new Guid("cc050597-3aed-4b98-83d3-51acfb895e10"), "Brand", "Description 2", "Product 2", "url_to_image_2.jpg", 200L, 20, "Type" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("28312368-7d6f-49cc-8f5c-40c0f0f60d74"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("35808198-b71d-417e-8292-2070d8bcf459"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("3e91e3db-63a3-41f7-81e2-17dc7041f92e"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("511c12a7-6f39-4e24-bc62-450d77cfac03"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("5e1ad86d-4c41-45a4-a95a-9ccb224ace60"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("6e685262-b634-49e6-8046-0cc9804a76a3"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("88dc563d-2087-4d56-bbde-1eb603d39e58"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("bff50538-cb79-4a3c-8634-1d794cc5b484"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("c9a76fa7-11a9-4ee9-8252-f8f10bc85840"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("cc050597-3aed-4b98-83d3-51acfb895e10"));

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
        }
    }
}
