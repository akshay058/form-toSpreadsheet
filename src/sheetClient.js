const { google } = require("googleapis");
const dotenv = require("dotenv");

// Importing the credentials (client_email and private_key) from the secrets.json file
const key = require("../secrets.json");

dotenv.config();

// Define the Google Sheets spreadsheet ID
exports.SHEET_ID = "1Ms_HnCkGgZ4lOHHpfCChGZ1HuUuPQwufydfd7wur5zc";

// Created a new JWT (JSON Web Token) client using the provided credentials
exports.client = new google.auth.JWT(key.client_email, null, key.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

// Creating a Google Sheets API client using the JWT client
exports.sheets = google.sheets({ version: "v4", auth: exports.client });
