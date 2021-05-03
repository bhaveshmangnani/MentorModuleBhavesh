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
        private readonly string URL = "https://localhost:44337/api/product";

        private readonly HttpClient httpClient;

        public TransactController(HttpClient httpClient)
        {
            this.httpClient = httpClient;
        }


        
        [HttpPost]
        public async Task<ActionResult<IEnumerable<string>>> Post([FromBody] List<Models.Product> cartProducts)
        {

            var response = await this.httpClient.GetAsync(URL);
            if(response.IsSuccessStatusCode)
            {
                var responseStream = response.Content.ReadAsStringAsync().Result;
                Console.WriteLine("Here result");
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

        
    }
}
