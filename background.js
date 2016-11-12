// This script doesn't appear to be needed at all, it runs once,
// persistently in the background but chrome takes care of injecting
// content_scripts from the manifest. I was having an issue before because
// I tried to use permissions to programmatically inject the scipts, but
// that was not necessary.

// `onUpdated` possibly firing before pageload?
// chrome.tabs.onUpdated.addListener(function(tab) {
//   chrome.tabs.executeScript(null, {file: "youtubeScript.js"});
// });
