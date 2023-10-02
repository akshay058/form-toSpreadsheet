# Google Sheets Data Entry Web App

This web application allows you to enter data into a Google Spreadsheet using a simple form. The data is submitted to a server, which then adds it to the specified Google Sheet.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed locally.
- A Google Sheets API service account key (JSON format) with the necessary permissions.
- A Google Sheet where you want to add data, and you have the Spreadsheet ID.

## Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/akshay058/addDataTo-googleSheet.git
   cd your-repo
   ``
   ```

2. Install the project dependencies:

   ```bash
   npm install

   ```

3. Create a secrets.json file in the project root directory with the following content

   ```bash
    client_email: <EMAIL>,
    private_key:-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQE...

   ```

4. Run the server

   ````bash
   npm run dev

   ```
    The server will start and listen on http://localhost:8080.

   ````

5. Open a web browser and navigate to http://localhost:8080 to access the web application

## Usage

1. Fill out the form with your data.

2. Click the "Send" button to submit the data to the Google Sheet.

3. You will receive a success message if the data was sent successfully.
