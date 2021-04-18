using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Formatting;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TransactionAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactController : ControllerBase
    {
        private const string URL = "https://localhost:44337/api/product";


        // POST api/<TransactController>
        //[HttpPost]
        //public IActionResult Post([FromBody] string vale)
        [HttpGet]
        public IEnumerable<Models.Product> Get()
        {
             
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(URL);

            // Add an Accept header for JSON format.
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            // List data response.
            HttpResponseMessage response = client.GetAsync("").Result;  // Blocking call! Program will wait here until a response is received or a timeout occurs.


            var allProducts = response.Content.ReadAsAsync<IEnumerable<Models.Product>>().Result;  //Make sure to add a reference to System.Net.Http.Formatting.dll

            return allProducts;


            /*bool payment = true;
            if(payment)
            {
                if(true)
                {
                    return Ok(true);
                }
                else
                {
                    return BadRequest("Insufficent products selecetd");
                }


            }
            else
            {
                return BadRequest("Payment Not Successfull");
            }*/

            
        }

        
    }
}
