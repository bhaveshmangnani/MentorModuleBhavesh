﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ProductAPI;

namespace ProductAPI.Migrations
{
    [DbContext(typeof(ProductContext))]
    [Migration("20210520194549_migration_1")]
    partial class migration_1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ProductAPI.Model.Product", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("availability")
                        .HasColumnType("int");

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Product", "dbo");

                    b.HasData(
                        new
                        {
                            id = 1,
                            availability = 10,
                            description = "Product 1 description",
                            name = "Product 1"
                        },
                        new
                        {
                            id = 2,
                            availability = 20,
                            description = "Product 2 description",
                            name = "Product 2"
                        },
                        new
                        {
                            id = 3,
                            availability = 11,
                            description = "Product 3 description",
                            name = "Product 3"
                        },
                        new
                        {
                            id = 4,
                            availability = 13,
                            description = "Product 4 description",
                            name = "Product 4"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
