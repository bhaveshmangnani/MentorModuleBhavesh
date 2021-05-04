using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Formatting;
using System.Threading.Tasks;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TransactionAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactController : ControllerBase
    {
        

        private readonly HttpClient httpClient;

        public TransactController(HttpClient _httpClient)
        {
            this.httpClient = _httpClient;
        }


        
        [HttpPost]
        public async Task<ActionResult<string>> Post([FromBody] List<Models.Product> cartProducts)
        {
            Console.WriteLine("Here 1 result");
            var response = await httpClient.GetAsync("https://localhost:44337/api/Product");
            if(response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStringAsync();
                Console.WriteLine("Here 2 result");
                var allProducts = JsonConvert.DeserializeObject<List<Models.Product>>(responseStream);
                foreach(Models.Product product in cartProducts)
                {
                    Models.Product p = allProducts[product.id - 1];
                    if(p.availability < product.availability)
                    {
                        return BadRequest("Product " + p.name + " not available in suffecient quantity");

                    }
                    
                }
                bool payment = true;
                if(payment)
                {
                    return Ok("Ordered Successfully");
                }
                else
                {
                    return BadRequest("Payment Failed");
                }
                
            }
            else
            {
                return Unauthorized("Hello");
            }
            
        }

        [HttpGet]
        public async Task<List<Models.Product>> Get()
        {
            Console.WriteLine("Hello worl");
            httpClient.BaseAddress = new Uri("https://localhost:44337/");
            var response = await httpClient.GetAsync("/api/product");


            if (response.IsSuccessStatusCode)
            {
                var responseObj = response.Content.ReadAsStringAsync().Result;
                var products = JsonConvert.DeserializeObject<List<Models.Product>>(responseObj);
                return products;
            }
            return null;
        }

        
    }
}
