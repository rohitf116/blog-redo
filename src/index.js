import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { globalErrorHandler } from "./controllers/error.controller.js";
const app = express();

app.use(express.json());
dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello world");
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

import userRoutes from "./routes/users.routes.js";
app.use("/users", userRoutes);

app.use(globalErrorHandler);
app.listen(4000, () => {
  console.log("Running");
});
