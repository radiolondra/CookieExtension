// -------------------------------------------------------------------------------------------------------------------
// APP.JS - Injects <div id="CookieExtensionApp"> element in the tab content page when requested from popup component
// -------------------------------------------------------------------------------------------------------------------

if (globalThis.BlazorBrowserExtension.BrowserExtension.Mode === globalThis.BlazorBrowserExtension.Modes.ContentScript) {
    const appDiv = document.createElement("div");
    appDiv.id = "CookieExtensionApp";
    appDiv.setAttribute("style", "position: absolute; left: 8px; top: 8px; z-index: 999999;");
    //document.body.appendChild(appDiv);
    document.body.prepend(appDiv);
}



