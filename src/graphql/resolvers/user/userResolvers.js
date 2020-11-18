import {
  queryFetchAllUsers,
  mutationWriteAndDeleteUser,
} from "./userResolversHelper";

export const resolvers = {
  Query: {
    users: queryFetchAllUsers,
  },
  Mutation: {
    writeAndDeleteUser: mutationWriteAndDeleteUser,
  },
};
