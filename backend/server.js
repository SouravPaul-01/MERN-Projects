const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle email and rating submission
app.post("/api/submit-email", (req, res) => {
  const { email, rating } = req.body;

  if (email && rating) {
    const filePath = path.join(__dirname, "emails.txt");
    const content = `Email: ${email}, Rating: ${rating}\n`;

    // Append the email and rating to the file
    fs.appendFile(filePath, content, (err) => {
      if (err) {
        console.error("Error writing to file", err);
        return res.status(500).json({ message: "Server Error" });
      }
      res.status(200).json({ message: "Email and rating saved successfully!" });
    });
  } else {
    res.status(400).json({ message: "Invalid email or rating" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
