const express = require("express");
const {z} = require("zod")

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use(express.json());

app.post("/send-message", (req, res) => {
  console.log("request received", req.body);
  return res.sendStatus(200);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
