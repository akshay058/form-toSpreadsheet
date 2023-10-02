const { google } = require("googleapis");
const key = require("./secrets.json");

const SHEET_ID = "1Ms_HnCkGgZ4lOHHpfCChGZ1HuUuPQwufydfd7wur5zc";

const client = new google.auth.JWT(key.client_email, null, key.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

const sheets = google.sheets({ version: "v4", auth: client });

module.exports = {
  SHEET_ID: SHEET_ID,
  sheets: sheets,
};
