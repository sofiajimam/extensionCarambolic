chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "getCurrentTabInfo") {
    getCurrentTabInfo().then(sendResponse).catch(sendResponse);
    return true;
  }
});

function getCurrentTabInfo() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      const url = currentTab.url;
      console.log("Current URL:", url);

      // get document title, favicon and main content

      chrome.scripting.executeScript(
        {
          target: { tabId: currentTab.id },
          function: functionToInject,
        },
        ([result] = []) => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            console.log("Title:", result.result.title);
            console.log("Favicon:", result.result.favicon);
            console.log("PTexts:", result.result.pTexts);
            console.log("URL:", url);
            // add url to result
            result.result.url = url;
            resolve(result.result);
          }
        }
      );

      function functionToInject() {
        const title = document.title;
        const faviconElement = document.querySelector("link[rel*='icon']");
        const favicon = faviconElement ? faviconElement.href : "";
        //const mainElement = document.querySelector("main");
        //const main = mainElement ? mainElement.outerHTML : "";
        const pElements = Array.from(document.querySelectorAll("p"));
        const pTexts = pElements.map((p) => p.textContent);
        return { title, favicon, pTexts };
        //return { title, favicon, main };
      }
    });
  });
}
