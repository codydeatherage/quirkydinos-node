const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

const PORT = process.env.port ?? 3000;

app.get("/", (req, res) => {
  res.json("Hello QuirkyDinos");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
