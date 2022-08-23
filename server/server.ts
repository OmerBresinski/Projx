import "dotenv";
import express from "express";
import cors from "cors";
import { api } from "./api";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", api);

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Server started on port ${process.env.SERVER_PORT}`)
);
