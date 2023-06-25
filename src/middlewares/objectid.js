import mongoose from "mongoose";
import { AppError } from "../utils/AppError";

export const isValidObjectid = (req, res, next) => {
  const { id } = req.params;
  const ObjectId = mongoose.isValidObjectId;
  if (!ObjectId(id)) {
    throw new AppError("Invalid object id", 400);
  }
  next();
};
