namespace BackendService.Models.YoutubeModels
{
    public class CommentContext
    {
        public string token { get; set; }
        public UpdateComment updateComment { get; set; }
        public PostComment postComment { get; set; }
        public ReplyComment replyComment { get; set; }
    }

    public class UpdateComment
    {
        public string id { get; set; }
        public CommentSnippet snippet { get; set; }
    }

    public class PostComment
    {
        public VideoSnippet snippet { get; set; }
    }

    public class ReplyComment
    {
        public CommentSnippet snippet { get; set; }
    }

    public class CommentSnippet
    {
        public string parentId { get; set; }
        public string textOriginal { get; set; }
    }

    public class VideoSnippet
    {
        public string videoId { get; set; }
        public TopLevelComment topLevelComment { get; set; }
    }

    public class TopLevelComment
    {
        public CommentSnippet snippet { get; set; }
    }
}
