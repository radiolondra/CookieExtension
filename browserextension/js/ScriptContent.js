// ------------------------------------------
// SCRPTCONTENT.JS - Content script
// ------------------------------------------

/*
(async () => {
    const url = (globalThis.browser || globalThis.chrome).runtime.getURL("");
    const initializeInternal = (await import(`${url}content/Blazor.BrowserExtension/CoreInternal.js`)).initializeInternal;
    
    alert(url);

    const configRequest = await fetch(`${url}content/browserextension.config.json`);
    const config = await configRequest.json();

    const blazorBrowserExtension = initializeInternal(config, url, "ContentScript");

    if (config.HasAppJs) {
        await import(`${url}app.js`);
    }

    if (blazorBrowserExtension.ImportBrowserPolyfill) {
        // import browser extension API polyfill
        // @ts-ignore JS is not a module
        await import(`${url}content/Blazor.BrowserExtension/lib/browser-polyfill.min.js`);
    }

    if (blazorBrowserExtension.StartBlazorBrowserExtension) {
        await blazorBrowserExtension.BrowserExtension.InitializeAsync(config.EnvironmentName);
    }
})();
*/

// Sends message "getAllCookies" to the background worker script and gets all the browser active cookies.
// At end calls C# function ShowAllActiveCookies passing back the JSON string of got cookies.
var getAllCookiesMessage = async function () {
    var cookies;
    await chrome.runtime.sendMessage({ action: "getAllCookies" })   
    .then(response => {
        cookies = response;
    });
    DotNet.invokeMethodAsync("CookieExtension", "ShowAllActiveCookies", cookies);
}

// Test
var showAlert = function () {
    alert("I'm here");
}
    

