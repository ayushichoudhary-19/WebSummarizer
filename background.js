// Replace 'YOUR_API_KEY' with your actual OpenAI API key
const apiKey = 'WVw0nQKj6EuhxVCQbMA2wuIxcpBFCVHzhfMT9jzF';
// Function to send a request to the ChatGPT API for summarization
async function summarizePageContent(pageContent, sendResponse) {
    try {
        const response = await fetch('https://api.cohere.ai/v1/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                text: pageContent, // Use the pageContent variable here
                length: 'medium',
                format: 'paragraph',
                model: 'command',
                extractiveness: 'low',
                temperature: 0.3,
   
            })
        });

        console.log(response);
        if (response.ok) {
            const data = await response.json();
            const summary = data.summary;
            console.log('Summary:', summary);
            sendResponse({ action: "summaryResponse", summary });
        } else {
            console.error('Error fetching data from API:', response.status);
        
            // Log the response body to get more details about the error
            const errorData = await response.text();
            console.error('Error response body:', errorData);
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
}

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
     if (request.action === "summarizePage") {
        const pageContent = request.content;
        console.log(pageContent);
        // Call the function to summarize the page content and send the response back
        summarizePageContent(pageContent, sendResponse);
    }

    // Ensure that sendResponse is called asynchronously
    return true;
});
