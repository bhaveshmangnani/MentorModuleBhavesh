using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class StringController : Controller
    {
        /*[HttpGet]
        public IActionResult Index()
        {
            return View();
        }*/

        [HttpGet]
        public IEnumerable<string> Hw()
        {
            return new string[] { "Hello world" };
        }
        /*
        [HttpGet]
        public IEnumerable<string> hw1()
        {
            return new string[] { "Hello world 1" };
        }*/
    }
}
