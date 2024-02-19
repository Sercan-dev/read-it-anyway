// contentScript.js
// This is a conceptual example. You need to adjust the selector based on the actual page structure of archive.ph
const finalLinkSelector = 'div.TEXT-BLOCK a'; // Adjust this selector based on actual content
const finalLink = document.querySelector(finalLinkSelector);

if (finalLink && finalLink.href) {
  chrome.runtime.sendMessage({action: "openFinalArticle", finalUrl: finalLink.href});
}
