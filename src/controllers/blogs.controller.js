import blogsModel from "../models/blogs.model.js";
import {
  serializeBlogCreate,
  serializeBlogUpdate,
} from "../serialize/blog.serialize.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import {
  validateCreateBlog,
  validateUpdateBlog,
} from "../validations/blog.validation.js";

export const createBlog = catchAsync(async (req, res, next) => {
  const result = validateCreateBlog(req.body);
  result.authorId = req.user._id;
  const blog = await blogsModel.create(result);
  const show = serializeBlogCreate(blog);
  res.status(201).json(show);
});

export const updateBlog = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = validateUpdateBlog(req.body);

  const blog = await blogsModel.findOne({ _id: id, isDeleted: false });
  if (!blog) {
    throw new AppError("Blog not found", 404);
  }
  result.isPublished = true;
  result.publishedAt = new Date();
  Object.assign(blog, result);
  await blog.save();
  const show = serializeBlogUpdate(blog);
  res.status(200).json(show);
});

export const getAllBlogs = catchAsync(async (req, res, next) => {
  const quey = { isDeleted: false, isPublished: true };
  const blog = await blogsModel.find(quey);
  res
    .status(200)
    .json({ status: true, message: "Blogs fetched successfuly", data: blog });
});

export const getBlogById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const quey = { isDeleted: false, isPublished: true, _id: id };
  const blog = await blogsModel.findOne(quey);
  res
    .status(200)
    .json({ status: true, message: "Blogs fetched successfuly", data: blog });
});

export const deleteBlog = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const quey = { isDeleted: false, _id: id };
  const deletedAt = new Date();
  const setData = { isDeleted: true, deletedAt };
  const blog = await blogsModel.findOneAndUpdate(quey, {
    $set: { ...setData },
  });
  if (!blog) {
    throw new AppError("Blog not found", 404);
  }
  res.status(200).json({ status: true, message: "Blogs deleted successfuly" });
});
