
using Microsoft.EntityFrameworkCore;
using ProductAPI.Model;

namespace ProductAPI
{
    public class ProductContext: DbContext
    {

        public ProductContext(DbContextOptions options) :base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Product>().HasData(
                new Product { id = 1, name = "Product 1", availability = 10, description = "Product 1 description" },
                new Product { id = 2, name = "Product 2", availability = 20, description = "Product 2 description" },
                new Product { id = 3, name = "Product 3", availability = 11, description = "Product 3 description" },
                new Product { id = 4, name = "Product 4", availability = 13, description = "Product 4 description" }
                );
            base.OnModelCreating(modelBuilder);

        }

        public DbSet<Product> Product { get; set; }



    }
}
