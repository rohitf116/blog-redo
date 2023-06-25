import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { globalErrorHandler } from "./controllers/error.controller.js";
const app = express();

app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

import userRoutes from "./routes/users.routes.js";
import blogRoutes from "./routes/blog.routes.js";
app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);

app.use(globalErrorHandler);
app.listen(4000, () => {
  console.log("Running");
});
