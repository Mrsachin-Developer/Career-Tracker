import type { Request, Response } from "express";
import { registerServices, loginService } from "./auth.services.js";
import { registerSchema, loginSchema } from "./auth.schema.js";

export const registerController = async (req: Request, res: Response) => {
  const data = registerSchema.parse(req.body);

  const user = await registerServices(data);

  res.status(201).json({
    success: true,
    data: user,
  });
};

export const loginController = async (req: Request, res: Response) => {
  const data = loginSchema.parse(req.body);

  const result = await loginService(data);

  res.status(200).json({
    success: true,
    data: result,
  });
};
