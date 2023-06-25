import {
  BlogJoiCreteSchema,
  BlogJoiUpdateSchema,
} from "../models/blogs.model.js";
import { AppError } from "../utils/AppError.js";
import { getError } from "../utils/error.js";
import { validator } from "./users.validation.js";

export const validateCreateBlog = (payload) => {
  const validateCreateBlog = validator(BlogJoiCreteSchema);
  const { error, value } = validateCreateBlog(payload);
  if (error) {
    throw new AppError(getError(error), 400);
  }
  return value;
};

export const validateUpdateBlog = (payload) => {
  const validateCreateBlog = validator(BlogJoiUpdateSchema);
  const { error, value } = validateCreateBlog(payload);
  if (error) {
    throw new AppError(getError(error), 400);
  }
  return value;
};
