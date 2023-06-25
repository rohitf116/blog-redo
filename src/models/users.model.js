import { Schema, model } from "mongoose";
import Joi from "joi";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { Title } from "../enum/titile.enum.js";
import { AppError } from "../utils/AppError.js";

dotenv.config();
const hashtoken = process.env.JWT_SECRET;
const UserSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    enum: Title,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("email")) {
    const emailExists = await this.constructor.findOne({ email: this.email });
    if (emailExists) {
      throw new AppError("User with this email already exists.", 409);
    }
  }

  if (this.isModified("password")) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
    } catch (error) {
      throw new AppError("Password encryption failed.", 500);
    }
  }
  next();
});

UserSchema.methods.generateToken = async function (password) {
  const isMatch = await this.matchPassword(password);

  if (isMatch) {
    const tokenData = {
      _id: this._id,
    };

    const token = jwt.sign(tokenData, hashtoken);
    return token;
  } else {
    throw new AppError("Incorrect password", 401);
  }
};

UserSchema.methods.matchPassword = async function (password, hashed) {
  console.log(password, hashed);
  const isMatch = await bcrypt.compare(password, hashed);
  return isMatch;
};
UserSchema.method.findByEmail = async function (email) {
  const emailExists = await this.constructor.findOne({ email: this.email });
  if (!emailExists) {
    throw new AppError("User not found", 400);
  }
  return emailExists;
};
UserSchema.methods.login = async function (user) {
  const { email, password } = user;
  const foundUser = await this.model("User").findOne({ email });
  console.log(foundUser);
  if (!foundUser) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await this.matchPassword(password, foundUser.password);
  console.log(isMatch);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const tokenData = { _id: foundUser._id };
  const token = jwt.sign(tokenData, hashtoken, { expiresIn: "30d" });
  return token;
};
export const UserJoiSchema = Joi.object({
  fname: Joi.string().min(1).required(),
  lname: Joi.string().min(1).required(),
  title: Joi.string()
    .valid(...Title)
    .required(),
  email: Joi.string().email().required(), // Optional field
  password: Joi.string().min(8).max(15).required(), // Optional field
}).unknown(false);

export const UserJoiUpdateSchema = Joi.object({
  fname: Joi.string().min(1).optional(),
  lname: Joi.string().min(1).optional(),
  title: Joi.string()
    .valid(...Title)
    .optional(),
  email: Joi.string().email().optional(), // Optional field
  password: Joi.string().min(8).max(15).optional(), // Optional field
}).unknown(false);

export const UserJoiLoginSchema = Joi.object({
  email: Joi.string().email().required(), // Optional field
  password: Joi.string().min(8).max(15).required(), // Optional field
}).unknown(false);
export default model("User", UserSchema);
