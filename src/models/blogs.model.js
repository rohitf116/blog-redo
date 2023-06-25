import { Schema, model } from "mongoose";
import Joi from "joi";

import { AppError } from "../utils/AppError.js";

const BlogsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tags: {
    type: [String],
  },
  category: { type: String, required: true },
  subcategory: {
    type: [String],
  },
  deletedAt: Date,
  isDeleted: { type: Boolean, default: false, select: false },
  isPublished: { type: Boolean, default: false },
  publishedAt: Date,
});

export const BlogJoiCreteSchema = Joi.object({
  title: Joi.string().min(1).required(),
  body: Joi.string().min(1).required(),
  tags: Joi.array().items(Joi.string()),
  category: Joi.string().min(1).required(),
  subcategory: Joi.array().items(Joi.string()),
}).unknown(false);

export const BlogJoiUpdateSchema = Joi.object({
  title: Joi.string().min(1).optional(),
  body: Joi.string().min(1).optional(),
  tags: Joi.array().items(Joi.string()),
  subcategory: Joi.array().items(Joi.string()),
}).unknown(false);
// export const UserJoiUpdateSchema = Joi.object({
//   fname: Joi.string().min(1).optional(),
//   lname: Joi.string().min(1).optional(),
//   title: Joi.string()
//     .valid(...Title)
//     .optional(),
//   email: Joi.string().email().optional(), // Optional field
//   password: Joi.string().min(8).max(15).optional(), // Optional field
// }).unknown(false);

// export const UserJoiLoginSchema = Joi.object({
//   email: Joi.string().email().required(), // Optional field
//   password: Joi.string().min(8).max(15).required(), // Optional field
// }).unknown(false);
export default model("Blog", BlogsSchema);
