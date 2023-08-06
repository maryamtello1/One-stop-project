# University Email Answering AI

Welcome to the One stop email Chrome extension! This extension is designed to assist university staff in answering emails by generating intelligent responses using the OpenAI API. It seamlessly integrates with Salesforce to fetch email content and provide relevant replies.

## Features

- **Automatic Email Detection**: Automatically detects emails when you're on a Salesforce webpage.
- **AI-Powered Responses**: Uses OpenAI's advanced language model to generate relevant and coherent email responses.
- **Easy Integration**: Seamlessly integrates with Salesforce, making your email management process smoother.

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/maryamtello1/One-stop-project.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" at the top right.
4. Click on "Load unpacked" and select the `chrome-extension` directory from the cloned repository.
5. The extension icon should now appear in your Chrome toolbar.

## Usage

1. Navigate to your Salesforce email page.
2. Open an email you wish to respond to.
3. Click on the University Email Answering AI extension icon.
4. The extension will automatically fetch the email content and generate a response using the OpenAI API.
5. Review the suggested response and make any necessary edits.
6. Send your email directly from Salesforce.

## Configuration

To use the OpenAI API, you'll need to set up your API key:

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Open the `.env` file and set your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
