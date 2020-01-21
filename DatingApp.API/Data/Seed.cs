using DatingApp.API.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

using System.Threading.Tasks;

namespace DatingApp.API.Data
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(context.Users.Count() <2)
            {
                var dataUsers = File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(dataUsers);
                byte[] passwordHash, passwordSalt;

                foreach (var user in users)
                {
                    CreatePasswordHash("password", out passwordHash, out passwordSalt);
                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    user.UserName = user.UserName.ToLower();
                    context.Users.Add(user);
                }
                context.SaveChanges();
            }

        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = System.Text.Encoding.UTF8.GetBytes(password);
            }
        }

    }
}
