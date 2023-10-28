document.addEventListener("DOMContentLoaded", function () {
    // Get the "Summarize" button element from popup.html
    const summarizeButton = document.getElementById("summarizeButton");

    // Get the "summary" div element where we will display the summary
    const summaryDiv = document.getElementById("summary");

    summarizeButton.addEventListener("click", () => {
        // Send a message to the content script to request the page content
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            console.log("Tabs:", tabs);
            if (tabs && tabs[0]) {
                chrome.scripting.executeScript(
                    {
                        target: { tabId: tabs[0].id },
                        function: () => {
                            return document.body.innerText; // Get the entire HTML content of the page in body tag
                        }
                    },
                    (result) => {
                        if (chrome.runtime.lastError) {
                            console.error(chrome.runtime.lastError);
                        } else {
                            const pageContent = result[0].result;
                            // Send the page content to the background script for summarization
                            chrome.runtime.sendMessage({ action: "summarizePage", content: pageContent }, (response) => {
                                console.log('inside sendMessage');
                                if (response && response.action === "summaryResponse") {
                                    console.log('Received summary response:', response);
                                    if (response.summary) {
                                        summaryDiv.textContent = response.summary;
                                    } else {
                                        summaryDiv.textContent = "Error: Unable to summarize the page.";
                                    }
                                }
                            });
                        }
                    }
                );
            }
        });
    });
});
