namespace BackendService.Models.YoutubeModels
{
    public class UploadContext
    {
        public string ClientId { get; set; }
        public string ClientSecret { get; set; }
        public string videoTitle { get; set; }
        public string videoDescription { get; set; }
        public string[] videoTags { get; set; }
        public string videoCategoryId { get; set; }
        public string videoPrivacyStatus { get; set; }
        public string filePath { get; set; }
    }
}
