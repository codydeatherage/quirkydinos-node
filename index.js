const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(express.json());
app.use(cors(corsOptions));

const PORT = process.env.port ?? 3000;

app.get("/", (req, res) => {
  res.json("Hello QuirkyDinos");
});

app.get("/test", (req, res) => {
  const q = `SELECT * FROM test`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
