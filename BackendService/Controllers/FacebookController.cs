using BackendService.Data;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System;
using BackendService.Models.FacebookModels;

namespace BackendService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FacebookController : Controller
    {
        private readonly UserDataDbContext dbContext;

        public FacebookController(UserDataDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetUserAsync()
        {


            /*   using (var httpClient = new HttpClient())
               {
                   httpClient.BaseAddress = new Uri("https://graph.facebook.com/");

                   var parametters = new Dictionary<string, string>
               {
                   { "access_token", "EAAhSf9IUqWUBADAzrVDhsIcdRdtjxotFPgUxvL3Riu551atLtDtquPqhKh0Ulw56rGCrLtgn0uUBMWnYtElZAk2m5mRgVyYbZCyaHvHZBZBT03WemZALnIj7hGOrWIRfW6vZBCvruGlMhxh66PzkS4hVT2rQvegenNd97uyz1mYGfy1WRzZBFhn" },
                   { "message", "1message" }
               };
                   var encodedContent = new FormUrlEncodedContent(parametters);

                   var result = await httpClient.PostAsync($"111580448515740/feed", encodedContent);
                   var msg = result.EnsureSuccessStatusCode();
                   string jsondata = await msg.Content.ReadAsStringAsync();
                   return Content(jsondata, "application/json");


               }*/

            return Ok("test okat");
        }

        [HttpPost]
        public async Task<IActionResult> CreatePost([FromBody] FacebookPost facebookPost)
        {
           
           
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://graph.facebook.com/");

                var parameters = new Dictionary<string, string>
                {
                    { "access_token", facebookPost.AccessToken },
                    { "message", facebookPost.Message }
                };
                var encodedContent = new FormUrlEncodedContent(parameters);

                var result = await httpClient.PostAsync($"{facebookPost.PageId}/feed", encodedContent);
                var msg = result.EnsureSuccessStatusCode();
                string jsondata = await msg.Content.ReadAsStringAsync();
                return Content(jsondata, "application/json");


            }
            return Ok(facebookPost.Message);
        }

        [HttpPost]
        [Route("photos")]
        public async Task<IActionResult> UploadImage([FromBody] FacebookPost facebookPost)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://graph.facebook.com/");
            
                var parametters = new Dictionary<string, string>
            {
                { "url", facebookPost.ImageUrl },
                { "access_token", facebookPost.AccessToken },
                { "message", facebookPost.Message }
            };
                var encodedContent = new FormUrlEncodedContent(parametters);

                var result = await httpClient.PostAsync($"{facebookPost.PageId}/photos", encodedContent);
                var msg = result.EnsureSuccessStatusCode();
                string jsondata = await msg.Content.ReadAsStringAsync();
                return Content(jsondata, "application/json");


            }
            return Ok("done");
        }
    }
}

