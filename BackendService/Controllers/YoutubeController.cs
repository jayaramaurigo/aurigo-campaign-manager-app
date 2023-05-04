using BackendService.Data;
using BackendService.Models.YoutubeModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Diagnostics;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace BackendService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class YoutubeController : Controller
    {

        //to return search results based on keywords
        [HttpGet]
        [Route("Search")]
        public async Task<IActionResult> Search([FromQuery] SearchContext searchContext)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://www.googleapis.com/youtube/v3/search");
                var uriString = $"{httpClient.BaseAddress}?key={searchContext.key}&q={searchContext.query}&type={searchContext.type}&part={searchContext.part}";
                var uri = new Uri(uriString);
                var response = await httpClient.GetAsync(uri);
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                    dynamic result = JsonSerializer.Deserialize<dynamic>(content, jsonOptions);

                    return Ok(result);
                }
                else return BadRequest();
            }
        }

        //getting channel analytics using channel id
        [HttpGet]
        [Route("ChannelData")]
        public async Task<IActionResult> GetChannelData([FromQuery] ChannelContext channelContext)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://www.googleapis.com/youtube/v3/channels");
                var uriString = $"{httpClient.BaseAddress}?key={channelContext.key}&part={channelContext.part}&id={channelContext.id}";
                //Debug.WriteLine(uriString);
                var uri = new Uri(uriString);
                var response = await httpClient.GetAsync(uri);
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                    dynamic result = JsonSerializer.Deserialize<dynamic>(content, jsonOptions);

                    return Ok(result);
                }
                else return BadRequest();
            }
        }

        //to get number of likes and dislikes and comments on a video using video id
        [HttpGet]
        [Route("Video")]
        public async Task<IActionResult> GetLikesNumber([FromQuery] VideoContext videoContext)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://www.googleapis.com/youtube/v3/channels");
                var uriString = $"{httpClient.BaseAddress}?key={videoContext.key}&part={videoContext.part}&id={videoContext.id}";
                //Debug.WriteLine(uriString);
                var uri = new Uri(uriString);
                var response = await httpClient.GetAsync(uri);
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                    dynamic result = JsonSerializer.Deserialize<dynamic>(content, jsonOptions);

                    return Ok(result);
                }
                else return BadRequest();
            }
        }

        //to rate a video using id
        [HttpPost]
        [Route("Video/Rate")]
        public async Task<IActionResult> RateVideo([FromBody] InteractionsContext interContext)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://www.googleapis.com/youtube/v3/videos/rate");
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", interContext.token);

                var uriString = $"{httpClient.BaseAddress}?id={interContext.id}&rating={interContext.rating}";
                var uri = new Uri(uriString);
                var response = await httpClient.PostAsync(uri, null);
                if (response.IsSuccessStatusCode)
                {
                    return Ok();
                }
                else return BadRequest();
            }
        }

        //to get info of comment threads under a video
        [HttpGet]
        [Route("Video/Comment")]
        public async Task<IActionResult> GetCommentThread([FromQuery] VideoContext videoContext)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://www.googleapis.com/youtube/v3/commentThreads");
                var uriString = $"{httpClient.BaseAddress}?key={videoContext.key}&part={videoContext.part}&videoid={videoContext.id}";
                //Debug.WriteLine(uriString);
                var uri = new Uri(uriString);
                var response = await httpClient.GetAsync(uri);
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                    dynamic result = JsonSerializer.Deserialize<dynamic>(content, jsonOptions);

                    return Ok(result);
                }
                else return BadRequest();
            }
        }

        //to post new comment
        [HttpPost]
        [Route("Video/Comment")]
        public async Task<IActionResult> PostComment([FromBody] CommentContext commentContext)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://www.googleapis.com/youtube/v3/commentThreads?part=id,snippet");
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", commentContext.token);

                var uri = httpClient.BaseAddress;

                string jsonData = JsonSerializer.Serialize(commentContext.postComment);
                //Debug.WriteLine(jsonData);
                StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");

                var response = await httpClient.PostAsync(uri, content);
                if (response.IsSuccessStatusCode)
                {
                    var responseString = await response.Content.ReadAsStringAsync();
                    var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                    dynamic result = JsonSerializer.Deserialize<dynamic>(responseString, jsonOptions);

                    return Ok(result);
                }
                else return BadRequest();
            }
        }

        //to update existing comment
        [HttpPut]
        [Route("Video/Comment")]
        public async Task<IActionResult> UpdateComment([FromBody] CommentContext commentContext)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://www.googleapis.com/youtube/v3/comments?part=id,snippet");
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", commentContext.token);

                string jsonData = JsonSerializer.Serialize(commentContext.updateComment);
                //Debug.WriteLine(jsonData);
                StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");

                var uri = httpClient.BaseAddress;

                var response = await httpClient.PutAsync(uri, content);
                if (response.IsSuccessStatusCode)
                {
                    return Ok();
                }
                else return BadRequest();
            }
        }

        //to delete existing comment
        [HttpDelete]
        [Route("Video/Comment")]
        public async Task<IActionResult> DeleteComment([FromBody] InteractionsContext interContext)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://www.googleapis.com/youtube/v3/comments");
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", interContext.token);
                if(!string.IsNullOrEmpty(interContext.rating)) 
                {
                    return BadRequest();
                }
                var uriString = $"{httpClient.BaseAddress}?id={interContext.id}";
                //Debug.WriteLine(uriString);
                var uri = new Uri(uriString);
                var response = await httpClient.DeleteAsync(uri);
                if (response.IsSuccessStatusCode)
                {
                    return Ok();
                }
                else return BadRequest();
            }
        }

        //to post replies to existing comments
        [HttpPost]
        [Route("Video/Comment/Reply")]
        public async Task<IActionResult> ReplyComment([FromBody] CommentContext commentContext)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("https://www.googleapis.com/youtube/v3/comments?part=id,snippet");
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", commentContext.token);

                var uri = httpClient.BaseAddress;

                string jsonData = JsonSerializer.Serialize(commentContext.replyComment);
                //Debug.WriteLine(jsonData);
                StringContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");

                var response = await httpClient.PostAsync(uri, content);
                if (response.IsSuccessStatusCode)
                {
                    var responseString = await response.Content.ReadAsStringAsync();
                    var jsonOptions = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
                    dynamic result = JsonSerializer.Deserialize<dynamic>(responseString, jsonOptions);

                    return Ok(result);
                }
                else return BadRequest();
            }
        }

    }
}
