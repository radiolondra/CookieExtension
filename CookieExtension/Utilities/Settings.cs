namespace CookieExtension.Utilities
{
    public class Settings
    {
        public const string CookiesZipFile = "black_domain.zip";
        public const string LogRoot = @"Assets\logs\";
        public const string DatabaseRoot = @"Assets\db\";
        public const string DatabasePath = @"Assets\db\cookiescanner.db";
        public const string BlackListTotal = @"Assets\db\black_domain.txt";
        public const string WhiteList = @"Assets\db\white_domain.txt";
        public const string BlackListTotalZip = @"Assets\db\" + CookiesZipFile;
        public const string BlackListUpdate = @"Assets\db\update_black_domain.txt";
        public const string ReportsFrxRoot = @"Assets\reports\";

        public const string PAVM_DATABASE = "cookiescanner.db";
        public const string COOKIES_BAD_LIST_TABLE = "bl";
        public const string COOKIES_WHITE_LIST_TABLE = "wl";

        public static string CREATE_TABLE_BL = $"CREATE TABLE IF NOT EXISTS {COOKIES_BAD_LIST_TABLE} (host text NOT NULL UNIQUE)";
        public static string CREATE_TABLE_WL = $"CREATE TABLE IF NOT EXISTS {COOKIES_WHITE_LIST_TABLE} (host text NOT NULL UNIQUE)";
        
    }
}
