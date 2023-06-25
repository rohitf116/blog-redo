import usersModel, { UserJoiSchema } from "../models/users.model.js";
import {
  serializeUser,
  serializeUserFetch,
  serializeUserRegistration,
  serializeUserUpdate,
} from "../serialize/user.serialize.js";
import { catchAsync } from "../utils/catchAsync.js";
import {
  validateSignUp,
  validateUpdateUser,
  validateUserLogin,
} from "../validations/users.validation.js";
// catchAsync;
export const signup = catchAsync(async (req, res, next) => {
  const result = validateSignUp(req.body);
  const user = await usersModel.create(result);
  const show = serializeUserRegistration(user);
  res.status(201).json(show);
});

export const updateUser = catchAsync(async (req, res, next) => {
  const id = req.user._id;
  const result = validateUpdateUser(req.body);
  const user = await usersModel.findOne({ _id: id });
  Object.assign(user, result);
  await user.save();
  const show = serializeUserUpdate(user);
  res.status(200).json(show);
});

export const geSelf = catchAsync(async (req, res, next) => {
  const id = req.user._id;
  const user = await usersModel.findOne({ _id: id });
  const show = serializeUserFetch(user);
  res.status(200).json(show);
});

export const login = catchAsync(async (req, res, next) => {
  const user_model = new usersModel();
  const result = validateUserLogin(req.body);
  // console.log(result);
  const token = await user_model.login(result);
  res
    .status(200)
    .json({ status: true, message: "login successfull", accessToken: token });
});
