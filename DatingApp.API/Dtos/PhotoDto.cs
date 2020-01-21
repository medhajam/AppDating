using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Dtos
{
    public class PhotoDto
    {
        public int Id { get; set; }

        public string Url { get; set; }

        public string Description { get; set; }

        public DateTime DateAjout { get; set; }

        public bool IsMain { get; set; }

        public int UserId { get; set; }
    }
}
