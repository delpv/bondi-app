import Parse from "parse";

export const getCurrentUser = async () => {
  const currentUser = await Parse.User.current();
  return currentUser;
};
