import express from "express";
import sheets, { SHEET_ID } from "./sheetClient.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//middlewares
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);
app.use(express.json());

app.use(express.static("public"));

// route to handle POST requests to "/send-message"

app.post("/send-message", async (req, res) => {
  try {
    const body = {
      ...req.body,
      age: parseInt(req.body.age), // Convert age to a number
    };

    // Object to Sheets
    const rows = Object.values(body);
    console.log("hello", rows);

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Data!A:C",
      insertDataOption: "INSERT_ROWS",
      valueInputOption: "RAW",
      requestBody: {
        values: [rows],
      },
    });

    // Respond with a JSON success message
    res.json({ message: "Data added successfully" });
  } catch (error) {
    if (error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error });
    }
  }
});

// Starting the Express server and listen on port 8080
app.listen(8080, () => console.log(`App running on http://localhost:8080`));
