import express from "express";
import cors from "cors";
import 'dotenv/config';
import { connetDB } from "../config/db.js";

const app = express();
// const port = process.env.PORT || 4000;
const port = 4000
app.use(express.json());
app.use(cors());

connetDB();

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
