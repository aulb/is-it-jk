// Called during popup load (when popup icon is clicked)
function getHighlightedText(callback) {
  chrome.tabs.executeScript(null, {file: 'src/getHighlightedText.js'});
  chrome.runtime.onMessage.addListener(message => callback(message));
}
