using BackendService.Models.LinkedinModels;
using BackendService.Models.YoutubeModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;


namespace BackendService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LinkedinController : Controller
    {
        [HttpPost]
        [Route("Signin")]
        public async Task<IActionResult> Signin([FromBody] SigninContext signinContext)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://api.linkedin.com/v2/me");
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", signinContext.accessToken);

                var response = await httpClient.GetAsync(httpClient.BaseAddress);
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                    dynamic result = System.Text.Json.JsonSerializer.Deserialize<dynamic>(content, jsonOptions);

                    return Ok(result);
                }
                else return BadRequest();
            }
        }

        [HttpPost]
        [Route("UploadPost")]
        public async Task<IActionResult> UploadPost([FromBody] PostContext postContext)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://api.linkedin.com/v2/ugcPosts");
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", postContext.accessToken);

                var uri = httpClient.BaseAddress;

                string jsonData = JsonConvert.SerializeObject(postContext.bodyContext);
                Debug.WriteLine(jsonData);
                StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");

                var response = await httpClient.PostAsync(uri, content);
                if (response.IsSuccessStatusCode)
                {
                    var responseString = await response.Content.ReadAsStringAsync();
                    var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                    dynamic result = System.Text.Json.JsonSerializer.Deserialize<dynamic>(responseString, jsonOptions);

                    return Ok(result);
                }
                else return BadRequest();
            }
        }
    }
}
