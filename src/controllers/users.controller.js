import usersModel, { UserJoiSchema } from "../models/users.model.js";
import {
  serializeUser,
  serializeUserRegistration,
  serializeUserUpdate,
} from "../serialize/user.serialize.js";
import { catchAsync } from "../utils/catchAsync.js";
import {
  validateSignUp,
  validateUpdateUser,
} from "../validations/users.validation.js";
// catchAsync;
export const signup = catchAsync(async (req, res, next) => {
  const result = validateSignUp(req.body);
  const user = await usersModel.create(result);
  const show = serializeUserRegistration(user);
  res.status(201).json(show);
});

export const updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = validateUpdateUser(req.body);
  const user = await usersModel.findOne({ _id: id });
  Object.assign(user, result);
  await user.save();
  const show = serializeUserUpdate(user);
  res.status(200).json(show);
});
