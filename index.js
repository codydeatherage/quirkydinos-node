const express = require("express");
const app = express();

const PORT = process.env.port ?? 3000;

app.get("/", (req, res) => {
  res.json("Hello QuirkyDinos");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
