# CookieExtension

Browser extension built in C# (Blazor) and Javascript

### How to Test

To test, clone this repo and install it as <u>unpacked extension</u> from the `browserextension`folder.

### Description

In this extension were used:  

- [Blazor.BrowserExtension](https://github.com/mingyaulee/Blazor.BrowserExtension): interface to create extensions in Blazor
- [WebExtensions.Net](https://github.com/mingyaulee/WebExtensions.Net): A package for consuming WebExtensions API in a browser extension.
- [BlazorStrap](https://blazorstrap.io): Bootstrap 5 components for Blazor

The functionality of this extension was implemented mainly to show "how to do things." Therefore, code study is necessary and sufficient, besides, of course, basic knowledge of C#, Javascript, Blazor and the libraries used.

### How to Build

Visual Studio 2022 with .Net 7 is required to compile the extension.

### Note

There is an error in Chromium that I [found and reported to the Chromium development team](https://bugs.chromium.org/p/chromium/issues/detail?id=1385796), which fails to instantiate WASM using manifest V3. On some web pages the extension generates the error:
 `"Uncaught (in promise) CompileError: WebAssembly.instantiateStreaming(): ..."`
This is due to the fact that Chromium, in some web pages, wrongly uses the CSP of the page instead of the CSP of the extension. The Chromium development team is working to correct the problem.
