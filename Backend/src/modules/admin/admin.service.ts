import client from "../../prisma.js";

export const getAllUser = async () => {
  const Users = await client.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return Users;
};

export const getAdminStats = async () => {
  const totalUser = await client.user.count();

  const totalApplication = await client.application.count();

  return {
    totalUser,
    totalApplication,
  };
};
export const deleteUserWithApplications = async (userId: string) => {
  const result = await client.$transaction([
    client.application.deleteMany({
      where: {
        userId,
      },
    }),

    client.user.delete({
      where: {
        id: userId,
      },
    }),
  ]);

  return result;
};
