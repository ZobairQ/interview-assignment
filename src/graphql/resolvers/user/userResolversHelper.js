import { User } from "../../../models/user/userModel";
import { writeToFile } from "../../../fileWriter/fileWriter";

export const queryFetchAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const mutationWriteAndDeleteUser = async (_, { id }) => {
  const user = await User.findOne({ where: { id } });
  writeToFile(user);
  return user;
};
