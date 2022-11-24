// --------------------------------------------------------------
// FUNCTIONS.JS - Javascript functions for index and popup pages
// --------------------------------------------------------------

// JS interop basic test functions

var helloJS = function () {
    DotNet.invokeMethodAsync("CookieExtension", "HelloJS")
        .then(result => {
            alert(result);
        });
}

var helloJSParams = function () {
    var value = "C# Method called from JavaScript with parameter (in index page)";
    DotNet.invokeMethodAsync("CookieExtension", "HelloJSParams", value);        
}

var popupJSParams = function () {
    var value = "C# Method called from JavaScript with parameter (in popup page)";
    DotNet.invokeMethodAsync("CookieExtension", "PopupJSParams", value);
}

// =========================================================================

// Injects the Javascript Content Script in the active tab. 
// The Javascript Content Script will inject ContentScript razor page in the active tab
var injectContentScript = async function () {
    var localTabs = []
    let queryOptions = { active: true, currentWindow: true };
    await browser.tabs.query(queryOptions)
        .then(tabs => {
            localTabs = tabs;
            console.log("Tab:", tabs[0]);
            if (tabs[0].url.startsWith("http")) {
                browser.scripting.executeScript(
                    {
                        target: { tabId: tabs[0].id },
                        files: ['content/Blazor.BrowserExtension/ContentScript.js'],                        
                    },
                    (res) => { }
                );
            }
        });
    
}



