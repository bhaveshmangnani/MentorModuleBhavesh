using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Formatting;
using System.Threading.Tasks;
using Newtonsoft.Json;
using TransactionAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TransactionAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactController : ControllerBase
    {
        

        private readonly IHttpClientFactory _clientFactory;

        public TransactController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }


        
        [HttpPost]
        public async Task<ActionResult<IEnumerable<string>>> Post([FromBody] List<Product> cartProducts)
        {
            var httpClient = _clientFactory.CreateClient();
            var response = await httpClient.GetAsync("https://localhost:44337/api/Product");
            if(response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStringAsync();
                var allProducts = JsonConvert.DeserializeObject<List<Product>>(responseStream);
                foreach(Product product in cartProducts)
                {

                    Product p = allProducts[product.id - 1];
                    Console.WriteLine("name = " + product.name);
                    Console.WriteLine("avaiable = " +p.availability+ " required = "+product.availability);
                    if (p.availability < product.availability)
                    {
                        Console.WriteLine("not available");
                        return BadRequest(new string[] {  p.name + " not available in suffecient quantity" });

                    }
                    
                }
                int payment = new Random().Next(0,100)&1;
                if(payment == 1)
                {
                    Console.WriteLine("payed");
                    return Ok(new string[] { "Ordered Successfully" });
                }
                else
                {
                    Console.WriteLine("not payed");
                    return BadRequest(new string[] { "Payment Failed" });
                }
                
            }
            else
            {
                Console.WriteLine("Error");
                return Unauthorized(new string[] { "Hello" });
            }
            
        }

        [HttpGet]
        public async Task<List<Product>> Get()
        {
            Console.WriteLine("Hello worl");
            var httpClient = _clientFactory.CreateClient();
            httpClient.BaseAddress = new Uri("https://localhost:44337/");
            var response = await httpClient.GetAsync("/api/product");


            if (response.IsSuccessStatusCode)
            {
                var responseObj = await response.Content.ReadAsStringAsync();
                var products = JsonConvert.DeserializeObject<List<Product>>(responseObj);
                return products;
            }
            return null;
        }

        
    }
}
