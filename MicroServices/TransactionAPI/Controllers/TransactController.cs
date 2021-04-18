using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TransactionAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactController : ControllerBase
    {


        // POST api/<TransactController>
        [HttpPost]
        public IActionResult Post([FromBody] string vale)
        {
            bool payment = true;
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
            }

            
        }

        
    }
}
