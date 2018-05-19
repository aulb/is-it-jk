sendResponseToPopup();

/* 
 * Helper functions below___
 */

function sendResponseToPopup() {
  /* 
   * Content script's sole job is to fetch data and pass it to the popup page.
   */
  chrome.runtime.sendMessage({
    highlightedText: window.getSelection().toString()
  });
}
