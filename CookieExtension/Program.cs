using BlazorStrap;
using CookieExtension.Services;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Net.Http;
using System.Threading.Tasks;


namespace CookieExtension
{
    public static class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);

            //builder.RootComponents.Add<App>("#app");
            builder.RootComponents.Add<App>("#CookieExtensionApp");

            builder.RootComponents.Add<HeadOutlet>("head::after");

            builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

            builder.Services.AddBrowserExtensionServices();

            //builder.Services.AddScoped<ServiceTest>();

            builder.Services.AddBlazorStrap();

            await builder.Build().RunAsync();
        }

        
    }
}
