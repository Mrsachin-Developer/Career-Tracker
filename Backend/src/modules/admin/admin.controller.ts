import type { Request, Response } from "express";
import {
  getAllUser,
  getAdminStats,
  deleteUserWithApplications,
} from "./admin.service.js";

export const getAllUsersController = async (req: Request, res: Response) => {
  const users = await getAllUser();

  res.json({
    success: true,
    data: users,
  });
};

export const getAdminStatsController = async (req: Request, res: Response) => {
  const stats = await getAdminStats();

  res.json({
    success: true,
    data: stats,
  });
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteUserWithApplications(id);

  res.json({
    success: true,
    message: "User deleted successfully",
  });
};
