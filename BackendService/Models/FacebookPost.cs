namespace BackendService.Models
{
    public class FacebookPost
    {
        public string PageId { get; set; }
        public string Message { get; set; }
        public string  AccessToken { get; set; }

        public string? ImageUrl { get; set; }

    }
}
