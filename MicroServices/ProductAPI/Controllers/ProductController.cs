using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductAPI.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProductAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        
        [HttpGet]
        public List<Product> Get()
        {
            List<Model.Product> products = new List<Model.Product>();
            Model.Product p1 = new Model.Product() { id = 1, name = "Product 1", availability = 10, description = "Product 1 description"};
            Model.Product p2 = new Model.Product() { id = 2, name = "Product 2", availability = 20, description = "Product 2 description" };
            Model.Product p3 = new Model.Product() { id = 3, name = "Product 3", availability = 11, description = "Product 3 description" };
            Model.Product p4 = new Model.Product() { id = 4, name = "Product 4", availability = 13, description = "Product 4 description" };

            products.Add(p1);
            products.Add(p2);
            products.Add(p3);
            products.Add(p4);

            return products;
        }

    }
}
