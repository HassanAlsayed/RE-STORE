using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RESTORE.Migrations
{
    /// <inheritdoc />
    public partial class addUserPicture : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<string>(
                name: "PictureUrl",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Products",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Products",
                type: "nvarchar(150)",
                maxLength: 150,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Brand", "Description", "Name", "PictureUrl", "Price", "QuantityInStock", "Type" },
                values: new object[,]
                {
                    { new Guid("2556d6fb-7ea0-407a-8b9a-51690113ba6c"), "Brand", "Description 3", "Product 3", "url_to_image_3.jpg", 300L, 30, "Type" },
                    { new Guid("4468d6e5-ca7d-4061-8b99-0768aeb78add"), "Brand", "Description 7", "Product 7", "url_to_image_7.jpg", 700L, 70, "Type" },
                    { new Guid("5db8fd3d-248c-4a7c-8da4-27cc24fc3350"), "Brand", "Description 1", "Product 1", "url_to_image_1.jpg", 100L, 10, "Type" },
                    { new Guid("620161cc-d4d5-48cd-b093-a505adef64ad"), "Brand", "Description 5", "Product 5", "url_to_image_5.jpg", 500L, 50, "Type" },
                    { new Guid("6e3ddce5-3cd1-4c73-a028-8df0588f1c68"), "Brand", "Description 4", "Product 4", "url_to_image_4.jpg", 400L, 40, "Type" },
                    { new Guid("883a15ea-cbd4-4efe-bc15-908ab077e599"), "Brand", "Description 2", "Product 2", "url_to_image_2.jpg", 200L, 20, "Type" },
                    { new Guid("91d8e846-930a-4a01-a85d-7c9d112e7e12"), "Brand", "Description 6", "Product 6", "url_to_image_6.jpg", 600L, 60, "Type" },
                    { new Guid("ba5fffcc-da47-4e88-86fd-ee0e3953561e"), "Brand", "Description 9", "Product 9", "url_to_image_9.jpg", 900L, 90, "Type" },
                    { new Guid("e082e5f2-fd0d-4f02-b23c-cb234834a072"), "Brand", "Description 10", "Product 10", "url_to_image_10.jpg", 1000L, 100, "Type" },
                    { new Guid("f0782b2d-dd6a-4f59-871c-c4863893e8e3"), "Brand", "Description 8", "Product 8", "url_to_image_8.jpg", 800L, 80, "Type" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("2556d6fb-7ea0-407a-8b9a-51690113ba6c"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("4468d6e5-ca7d-4061-8b99-0768aeb78add"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("5db8fd3d-248c-4a7c-8da4-27cc24fc3350"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("620161cc-d4d5-48cd-b093-a505adef64ad"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("6e3ddce5-3cd1-4c73-a028-8df0588f1c68"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("883a15ea-cbd4-4efe-bc15-908ab077e599"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("91d8e846-930a-4a01-a85d-7c9d112e7e12"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("ba5fffcc-da47-4e88-86fd-ee0e3953561e"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("e082e5f2-fd0d-4f02-b23c-cb234834a072"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("f0782b2d-dd6a-4f59-871c-c4863893e8e3"));

            migrationBuilder.DropColumn(
                name: "PictureUrl",
                table: "Users");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Products",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldMaxLength: 30);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Products",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(150)",
                oldMaxLength: 150);

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
    }
}
