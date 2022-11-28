// ------------------------------------------
// BACKGROUNDWORKER.JS - Background Worker
// ------------------------------------------

// Import for the side effect of defining a global 'browser' variable
import * as _ from "/content/Blazor.BrowserExtension/lib/browser-polyfill.min.js";

browser.runtime.onInstalled.addListener(() => {
  const indexPageUrl = browser.runtime.getURL("index.html");
  browser.tabs.create({
    url: indexPageUrl
  });
});

// ----------------------------------------------------
// Messages pumps
// ----------------------------------------------------
browser.runtime.onConnect.addListener(function (port) {
    // If there is a 'CEPort' connection coming in...
    if (port.name == "CEPort") {
        // ...add a listener that is called when the other side posts a message on the port.
        port.onMessage.addListener(function (message) {
            switch (message.action) {
                case "getAllCookies":
                    sendResponse(getAllCookies);
                    break;
            }

        });
    }
    return true;
});

browser.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        switch (message.action) {
            case "openDialog":
                sendResponse('Hello from content');
                break;
            case "getActiveTab":
                var id = getActiveTab();
                sendResponse(id);                
            case "getAllCookies":
                
                sendResponse(getAllCookies());
                break;
        }
        return true;
    }
);

// Test - Get active tab ID
var getActiveTab = async function () {    
    let queryOptions = { active: true, lastFocusedWindow: true };
    await browser.tabs.query(queryOptions)
        .then(tabs => {            
            //console.log("Tab:", tabs[0]);
            var id = tabs[0].id;
            return id;
        });
}


// Gets all the browser active cookies. 
// returns the JSON string of the cookies.
var getAllCookies = async function () {
    var cookieArray = [];
    var count = 0;
    await browser.cookies
        .getAll({})
        .then(cookies => {
            count = cookies.length;
            //alert(cookies.length);
            cookies.forEach(function (cookie) {
                cookieArray.push({
                    name: cookie.name,
                    domain: cookie.domain,
                    value: cookie.value,
                    path: cookie.path
                });
            });
            
        });
    return JSON.stringify(cookieArray);
}



