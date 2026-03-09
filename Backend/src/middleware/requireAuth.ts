import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError.js";
import type { Role } from "../generated/prisma/enums.js";


type JwtPayload = {
  userId: string;
  role: Role;
};

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AppError("Unauthorized", 401);
  }

  const token = authHeader.split(" ")[1] ;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as unknown as JwtPayload;

    req.user = {
      id: decoded.userId,
      role: decoded.role,
    };

    next();
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
};
