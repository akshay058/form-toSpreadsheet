const express = require("express");
const { z, ZodError } = require("zod");
const { SHEET_ID } = require("./sheetClient");
const sheets = require("./sheetClient");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "*",
  methods: "GET,POST",
};
app.use(express.json());

app.use(cors(corsOptions));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email(),
  age: z.string().min(1, { message: "Age is required" }),
});

app.use(express.static("public"));

app.post("/send-message", async (req, res) => {
  try {
    const body = contactFormSchema.parse(req.body);

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
    res.json({ message: "Data added successfully" });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error });
    }
  }
});

app.listen(5000, () => console.log(`App running on http://localhost:5000`));
