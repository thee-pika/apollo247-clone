import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { router } from "./routes/route";
config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/doctor", router);

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Server is saying hello");
});

app.listen(PORT, () => console.log("App is listening on ", PORT));
