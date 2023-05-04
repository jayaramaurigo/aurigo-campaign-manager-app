using BackendService.Models.FacebookModels;
using Microsoft.EntityFrameworkCore;

namespace BackendService.Data
{
    public class UserDataDbContext : DbContext
    {
        public UserDataDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<UserContext>   UserContexts { get; set; }
    }
}
