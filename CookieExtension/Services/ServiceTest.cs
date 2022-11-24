using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace CookieExtension.Services
{
    public class ServiceTest
    {
        private IJSRuntime JS;
        public static string content { get; set; }
        public ServiceTest(IJSRuntime js)
        {
            this.JS = js;
        }

        public void test()
        {
            JS.InvokeVoidAsync("alert", "Alert");
        }        

    }
}
