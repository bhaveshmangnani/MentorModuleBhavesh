﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransactionAPI.Models
{
    public class Product
    {
        public int id { get; set; }

        public string name { get; set; }

        public int availability { get; set; }

        public string description { get; set; }
    }
}
