﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RESTORE.Data;

#nullable disable

namespace RESTORE.Migrations
{
    [DbContext(typeof(ReStoreDbContext))]
    [Migration("20240330131552_initail")]
    partial class initail
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0-preview.2.24128.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("RESTORE.Entities.Product", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Brand")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PictureUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("Price")
                        .HasColumnType("bigint");

                    b.Property<int>("QuantityInStock")
                        .HasColumnType("int");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = new Guid("4f8aec05-a9ae-4a0b-a994-7a4c1ce47975"),
                            Brand = "Brand",
                            Description = "Description 1",
                            Name = "Product 1",
                            PictureUrl = "url_to_image_1.jpg",
                            Price = 100L,
                            QuantityInStock = 10,
                            Type = "Type"
                        },
                        new
                        {
                            Id = new Guid("7ec67ba4-7dbe-4c91-8e18-ce149971a332"),
                            Brand = "Brand",
                            Description = "Description 2",
                            Name = "Product 2",
                            PictureUrl = "url_to_image_2.jpg",
                            Price = 200L,
                            QuantityInStock = 20,
                            Type = "Type"
                        },
                        new
                        {
                            Id = new Guid("6f6f41ff-317c-48c8-9e44-73bb72a029ab"),
                            Brand = "Brand",
                            Description = "Description 3",
                            Name = "Product 3",
                            PictureUrl = "url_to_image_3.jpg",
                            Price = 300L,
                            QuantityInStock = 30,
                            Type = "Type"
                        },
                        new
                        {
                            Id = new Guid("55aadf67-96b8-4c97-a9b9-5c8ebdd0e0cf"),
                            Brand = "Brand",
                            Description = "Description 4",
                            Name = "Product 4",
                            PictureUrl = "url_to_image_4.jpg",
                            Price = 400L,
                            QuantityInStock = 40,
                            Type = "Type"
                        },
                        new
                        {
                            Id = new Guid("25081ac5-9a6e-4a35-817d-e7c1a6954cca"),
                            Brand = "Brand",
                            Description = "Description 5",
                            Name = "Product 5",
                            PictureUrl = "url_to_image_5.jpg",
                            Price = 500L,
                            QuantityInStock = 50,
                            Type = "Type"
                        },
                        new
                        {
                            Id = new Guid("554b7ed9-c8e5-47a6-9d7b-0ae09257806d"),
                            Brand = "Brand",
                            Description = "Description 6",
                            Name = "Product 6",
                            PictureUrl = "url_to_image_6.jpg",
                            Price = 600L,
                            QuantityInStock = 60,
                            Type = "Type"
                        },
                        new
                        {
                            Id = new Guid("83d67377-23d5-4ec4-887d-6beced35c4de"),
                            Brand = "Brand",
                            Description = "Description 7",
                            Name = "Product 7",
                            PictureUrl = "url_to_image_7.jpg",
                            Price = 700L,
                            QuantityInStock = 70,
                            Type = "Type"
                        },
                        new
                        {
                            Id = new Guid("42a7ff9b-53fc-4a55-b7b0-d5686cb6c265"),
                            Brand = "Brand",
                            Description = "Description 8",
                            Name = "Product 8",
                            PictureUrl = "url_to_image_8.jpg",
                            Price = 800L,
                            QuantityInStock = 80,
                            Type = "Type"
                        },
                        new
                        {
                            Id = new Guid("4079f540-c514-4c2d-8e64-2b0ed27794af"),
                            Brand = "Brand",
                            Description = "Description 9",
                            Name = "Product 9",
                            PictureUrl = "url_to_image_9.jpg",
                            Price = 900L,
                            QuantityInStock = 90,
                            Type = "Type"
                        },
                        new
                        {
                            Id = new Guid("04d02fe7-45ce-476f-aefb-9de92724dbe8"),
                            Brand = "Brand",
                            Description = "Description 10",
                            Name = "Product 10",
                            PictureUrl = "url_to_image_10.jpg",
                            Price = 1000L,
                            QuantityInStock = 100,
                            Type = "Type"
                        });
                });

            modelBuilder.Entity("RESTORE.Entities.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("nvarchar(10)");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
