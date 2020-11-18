import { User } from "../../../models/user/userModel";

export const queryFetchAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const mutationWriteAndDeleteUser = async (_, { id }) => {};
