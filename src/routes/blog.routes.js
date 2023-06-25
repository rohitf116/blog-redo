import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../controllers/blogs.controller.js";
import { isAuth } from "../middlewares/auth.js";
import { blogGuard } from "../guards/blog.guard.js";
import { isValidObjectid } from "../middlewares/objectid.js";

const router = Router();

router.route("/").post(isAuth, createBlog).get(getAllBlogs);

router
  .route("/:id")
  .patch(isAuth, isValidObjectid, blogGuard, updateBlog)
  .get(isValidObjectid, getBlogById)
  .delete(isAuth, isValidObjectid, blogGuard, deleteBlog);
// router.route('/:id').patch(isAuth, isVerified, valideUpdate, updateUser);

export default router;
