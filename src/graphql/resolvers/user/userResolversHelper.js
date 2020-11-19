import { User } from "../../../models/user/userModel";
import { writeToFile } from "../../../fileWriter/fileWriter";
import { verifyDataHasBeenWritten } from "../../../fileWriter/fileWriter";

export const queryFetchAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const mutationWriteAndDeleteUser = async (_, { id }) => {
  const status = {
    code: "400",
    message: "Data was either not written or deleted correctly",
  };

  try {
    const user = await User.findOne({ where: { id } });
    if (user === null) {
      return {
        code: "400",
        message:
          "The user you have searched for is not found. He might have been already deleted",
      };
    }
    await writeToFile(user);

    if (await verifyDataHasBeenWritten(user)) {
      // user has been successfully written. We can now safely delete the entry.
      await user.destroy();
      return {
        code: "200",
        message:
          "User has been successfully written to output.json and row for id: " +
          user.id +
          " is now deleted",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      code: 500,
      message: error,
    };
  }

  return status;
};
