import { AppError } from "../utils/AppError.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { catchAsync } from "../utils/catchAsync.js";
dotenv.config();
export const isAuth = catchAsync(async (req, res, next) => {
  const token = req.headers["x-api-key"];
  console.log(token);
  if (!token) {
    throw new AppError("Token is not present in headers", 401);
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, reponse) => {
    if (err) {
      throw new AppError("Token not verified", 401);
    }
    req.user = reponse;
    next();
  });
});
