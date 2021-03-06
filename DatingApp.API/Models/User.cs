﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Models
{
    public class User
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public string Sexe { get; set; }

        public DateTime DateDeNaissance { get; set; }

        public string Alias { get; set; }

        public DateTime DateCreation { get; set; }

        public DateTime DerniereConnexion { get; set; }

        public string Descrioption { get; set; }

        public string Recherche { get; set; }

        public string Interets { get; set; }

        public string Ville { get; set; }

        public string Pays { get; set; }

        public ICollection<Photo> Photos { get; set; }
    }
}
