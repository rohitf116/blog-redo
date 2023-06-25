import usersModel, {
  UserJoiLoginSchema,
  UserJoiSchema,
  UserJoiUpdateSchema,
} from "../models/users.model.js";
import { AppError } from "../utils/AppError.js";
import { getError } from "../utils/error.js";

export const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: true, stripUnknown: true });

export const validateSignUp = (payload) => {
  const validateSignUp = validator(UserJoiSchema);
  const { error, value } = validateSignUp(payload);
  if (error) {
    throw new AppError(getError(error), 400);
  }
  return value;
};
// export const validateSignUp = validator(UserJoiSchema);
export const validateUpdateUser = (payload) => {
  const update = validator(UserJoiUpdateSchema);
  const { error, value } = update(payload);
  if (error) {
    throw new AppError(getError(error), 400);
  }
  return value;
};

export const validateUserLogin = (payload) => {
  const login = validator(UserJoiLoginSchema);
  const { error, value } = login(payload);
  if (error) {
    throw new AppError(getError(error), 400);
  }
  return value;
};
