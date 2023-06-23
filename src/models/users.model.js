import { Schema, model } from "mongoose";
import { Title } from "../enum/titile.enum.js";
import Joi from "joi";
import { AppError } from "../utils/AppError.js";
import * as bcrypt from "bcrypt";

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
  const emailExists = await this.constructor.findOne({ email: this.email });
  if (emailExists) {
    throw new AppError("User with this email already exists.", 409);
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
export default model("User", UserSchema);
