using System;
using System.Collections.Generic;
using System.Text;

namespace Business
{
    public interface ILoginManager
    {
        bool AuthenticateLogin(string uname, string password);
    }
}
