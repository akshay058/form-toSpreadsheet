import { google } from "googleapis";
import dotenv from "dotenv";

import key from "../secrets.json" assert { type: "json" };
export const SHEET_ID = "1Ms_HnCkGgZ4lOHHpfCChGZ1HuUuPQwufydfd7wur5zc";
dotenv.config();
const client = new google.auth.JWT(key.client_email, null, key.private_key, [
  "https://www.googleapis.com/auth/spreadsheets",
]);

const sheets = google.sheets({ version: "v4", auth: client });

export default sheets;
