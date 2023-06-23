import { Router } from "express";
import { signup, updateUser } from "../controllers/users.controller.js";

const router = Router();

router.route("/").post(signup);

router.route("/:id").patch(updateUser);
// router.route('/:id').patch(isAuth, isVerified, valideUpdate, updateUser);

export default router;
