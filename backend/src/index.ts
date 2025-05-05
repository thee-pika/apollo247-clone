import express from "express";
import { config } from "dotenv";
config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Server is saying hello");
});

app.listen(PORT, () => console.log("App is listening on ", PORT));
