using System;
using System.Collections.Generic;
using System.Text;

namespace Business
{
    public class LoginManager : ILoginManager
    {

        public bool AuthenticateLogin(string uname, string password)
        {
            if ((uname == "Bhavesh") &&  (password == "bm10"))
            {
                return true;
            }
            return false;
        }



    }
}
