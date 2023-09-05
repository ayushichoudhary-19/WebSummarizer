
# Web Summarizer Chrome Extension

A Chrome extension that allows you to summarize the content of web pages using the Cohere.ai API.

## Overview

This Chrome extension enables users to extract and summarize the content of the currently opened web page. It utilizes the Cohere.ai API to generate concise summaries of web page content. The summarized content is then displayed in a popup within the Chrome browser.

## Features

- Summarize web page content.
- Display the summary in a popup.
- Simple and user-friendly interface.

## Getting Started

To get started with the Web Summarizer Chrome Extension, follow these steps:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/yourusername/web-summarizer-extension.git
   ```

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" in the top right corner.

4. Click on the "Load unpacked" button.

5. Select the directory where you cloned this repository.

6. The extension should now be installed and visible in your browser.

## Usage

1. Browse a web page you want to summarize.

2. Click the extension icon (the puzzle piece) in the top right corner of your Chrome browser.

3. Click the "Summarize" button in the popup.

4. The summary of the web page content will be displayed in the popup.

## Configuration

Before using the extension, you need to set your Cohere.ai API key in the `background.js` file. Replace `'YOUR_API_KEY'` with your actual API key:

```javascript
const apiKey = 'YOUR_API_KEY';
```

## Technologies Used

- HTML
- CSS
- JavaScript
- Cohere.ai API
- Chrome Extension API

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Cohere.ai](https://cohere.ai/) for providing the summarization API.
- [Chrome Extension Developer Documentation](https://developer.chrome.com/docs/extensions/mv3/getstarted/) for guidance on building Chrome extensions.
```
