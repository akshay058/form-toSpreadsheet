import { google } from "googleapis";
import dotenv from "dotenv";

// Importing the credentials (client_email and private_key) from the secrets.json file
// import key from "../secrets.json" assert { type: "json" };

dotenv.config();

// Define the Google Sheets spreadsheet ID
export const SHEET_ID = "1Ms_HnCkGgZ4lOHHpfCChGZ1HuUuPQwufydfd7wur5zc";

// Created a new JWT (JSON Web Token) client using the provided credentials
const client = new google.auth.JWT(
  process.env.client_email,
  null,
  process.env.private_key,
  ["https://www.googleapis.com/auth/spreadsheets"]
);

// Creating a Google Sheets API client using the JWT client
const sheets = google.sheets({ version: "v4", auth: client });

export default sheets;
