import { Router } from "express";
import { login, signup, updateUser } from "../controllers/users.controller.js";
import { isAuth } from "../middlewares/auth.js";
import { isValidObjectid } from "../middlewares/objectid.js";

const router = Router();

router.route("/").patch(isAuth, isValidObjectid, updateUser);
router.route("/signin").post(login);
router.route("/signup").post(signup);

// router.route('/:id').patch(isAuth, isVerified, valideUpdate, updateUser);

export default router;
