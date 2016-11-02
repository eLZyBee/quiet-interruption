// `onUpdated` possibly firing before pageload?
chrome.tabs.onUpdated.addListener(function(tab) {
  chrome.tabs.executeScript(tab, {file: "script.js"});
});
