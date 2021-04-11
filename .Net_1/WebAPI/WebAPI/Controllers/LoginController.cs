using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business;
using Common;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private readonly ILoginManager _loginManager;

        public LoginController(ILoginManager loginManager)
        {
            this._loginManager = loginManager;
        }


        [HttpPost]
        public IActionResult CheckLogin([FromBody]  Dictionary<string, string> user )
        {

            string username = user["username"];
            string password = user["password"];

            if( _loginManager.AuthenticateLogin(username, password ) )
            {
                return Ok(true);
            }
            else
            {
                return Unauthorized(false);
            }
        }


        
    }
}
