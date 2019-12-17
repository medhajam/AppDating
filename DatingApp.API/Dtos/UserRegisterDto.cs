using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Dtos
{
    public class UserRegisterDto
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [StringLength(10,MinimumLength =4,ErrorMessage ="Le mot de passe doit contenir au moin 4 caractéres et au maximum 10")]
        public string Password { get; set; }
    }
}
