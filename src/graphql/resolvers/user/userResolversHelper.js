import { User } from "../../../models/user/userModel";
import { writeToFile } from "../../../fileWriter/fileWriter";
import { verifyDataHasBeenWritten } from "../../../fileWriter/fileWriter";

export const queryFetchAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const mutationWriteAndDeleteUser = async (_, { id }) => {
  const user = await User.findOne({ where: { id } });
  writeToFile(user);
  if (verifyDataHasBeenWritten(data)) {
    // Data has been successfully written. We can now safely delete the entry.
    
  }
  return user;
};
