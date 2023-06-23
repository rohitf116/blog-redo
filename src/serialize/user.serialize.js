export const serializeUser = (user, message) => {
  const { fname, lname, title, email } = user;
  return {
    status: true,
    message: `User ${message} successful`,
    data: {
      fname,
      lname,
      title,
      email,
    },
  };
};

export const serializeUserRegistration = (user) => {
  const result = serializeUser(user, "registration");
  return result;
};
export const serializeUserUpdate = (user) => {
  const result = serializeUser(user, "update");
  return result;
};
