import type { Request, Response } from "express";
import { getDashboardAnalytics } from "./analytics.service.js";

export const getDashboardAnalyticsController = async (
  req: Request,
  res: Response
) => {

  const userId = req.user.id;

  const analytics = await getDashboardAnalytics(userId);

  res.json({
    success: true,
    data: analytics
  });

};