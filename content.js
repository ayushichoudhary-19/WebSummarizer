document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");
    // Extract the page content
    const pageContent = document.body.innerText;
    console.log(pageContent);
    // Send the page content to the background script
    chrome.runtime.sendMessage({ action: "pageContent", content: pageContent });
});
