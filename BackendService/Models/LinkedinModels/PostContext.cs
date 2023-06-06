using Newtonsoft.Json;

namespace BackendService.Models.LinkedinModels
{
    
        // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
    public class ComLinkedinUgcShareContent
    {
        public ShareCommentary shareCommentary { get; set; }
        public string shareMediaCategory { get; set; }
    }

    public class PostContext 
    { 
        public string accessToken { get; set; }
        public BodyContext bodyContext { get; set; }
    }

    public class BodyContext
    {
        public string author { get; set; }
        public string lifecycleState { get; set; }
        public SpecificContent specificContent { get; set; }
        public Visibility visibility { get; set; }
    }

    public class ShareCommentary
    {
        public string text { get; set; }
    }

    public class SpecificContent
    {
        [JsonProperty("com.linkedin.ugc.ShareContent")]
        public ComLinkedinUgcShareContent comlinkedinugcShareContent { get; set; }
    }

    public class Visibility
    {
        [JsonProperty("com.linkedin.ugc.MemberNetworkVisibility")]
        public string comlinkedinugcMemberNetworkVisibility { get; set; }
    }


    
}
