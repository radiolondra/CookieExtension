namespace CookieExtension.Models
{
    public class TabInfo
    {
        public long tabId { get; set; }
        public bool isWebpage { get; set; }

        public TabInfo(long tabId, bool isWebpage)
        {
            this.tabId = tabId;
            this.isWebpage = isWebpage;
        }
    }

    
}
