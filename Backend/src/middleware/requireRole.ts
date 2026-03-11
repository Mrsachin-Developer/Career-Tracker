import type { NextFunction, Request, Response } from "express";
import type { Role } from "../generated/prisma/enums.js";
import { AppError } from "../utils/AppError.js";

export const requireRole = (role: Role) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new AppError("Unauthorized", 401);
    }
     if (req.user.role !== role) {
      throw new AppError("Forbidden: insufficient permissions", 403);
    }
    next();
  };
};
