using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Dtos
{
    public class UserForUpdateDto
    {
        public string Descrioption { get; set; }

        public string Recherche { get; set; }

        public string Interets { get; set; }

        public string Ville { get; set; }

        public string Pays { get; set; }
    }
}
