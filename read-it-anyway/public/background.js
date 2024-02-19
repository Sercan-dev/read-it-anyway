chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "redirectAndClick") {
    const intermediateUrl = `https://archive.ph/${encodeURIComponent(request.url)}`;
    chrome.tabs.create({ url: intermediateUrl, active: false }, function(tab) {
      // Listen for the content script to send the final URL
      chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === "openFinalArticle" && request.finalUrl) {
          // Open the final URL in a new tab
          chrome.tabs.create({ url: request.finalUrl });

          // Close the intermediate tab
          chrome.tabs.remove(tab.id);
          sendResponse({status: 'Final article opened in new tab'});
        }
      });
    });
    sendResponse({status: 'Intermediate step initiated in background'});
  }
  return true; // Keep the messaging channel open for the response
});
