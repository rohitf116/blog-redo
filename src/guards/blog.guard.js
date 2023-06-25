import blogsModel from "../models/blogs.model.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";

export const blogGuard = catchAsync(async (req, res, next) => {
  const { user, params } = req;
  const blog = await blogsModel.findOne({ _id: params.id });
  if (blog.authorId.toString() !== user._id.toString()) {
    throw new AppError("Forbidden", 403);
  }
  next();
});
