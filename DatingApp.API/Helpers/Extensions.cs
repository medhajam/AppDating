﻿using DatingApp.API.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message )
        {
            response.Headers.Add("Application-Error",message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");

        }

        public static int CalculerAge(this DateTime dateDeNaissance)
        {

            var age = DateTime.Today.Year - dateDeNaissance.Year;
            if (dateDeNaissance.AddYears(age) > DateTime.Today)
                age--;

            return age;
        }
    }
}
