import client from "../../prisma.js";

export const getDashboardAnalytics = async (userId: string) => {
  const totalApplication = await client.application.count({
    where: { userId },
  });

  const statusCount = await client.application.groupBy({
    by: ["status"],
    where: {
      userId,
      _count: {
        status: true,
      },
    },
  });

  const monthlyTrend = await client.$queryRaw`
    SELECT 
      DATE_TRUNC('month', "createdAt") AS month,
      COUNT(*) as count
    FROM "Application"
    WHERE "userId" = ${userId}
    GROUP BY month
    ORDER BY month ASC
  `;

  return {
    totalApplication,
    statusCount,
    monthlyTrend,
  };
};
