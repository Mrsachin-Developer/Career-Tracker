import type { Request, Response } from "express";
import {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
} from "./application.service.js";

import {
  createApplicationSchema,
  updateApplicationSchema,
} from "./application.schema.js";

export const createApplicationController = async (
  req: Request,
  res: Response,
) => {
  const data = createApplicationSchema.parse(req.body);

  const userId = req.user.id;

  const application = await createApplication(userId, data);

  res.status(201).json({
    success: true,
    data: application,
  });
};

export const getApplicationsController = async (
  req: Request,
  res: Response,
) => {
  const userId = req.user.id;

  const applications = await getApplications(userId, req.query);

  res.json({
    success: true,
    data: applications,
  });
};

export const getApplicationByIdController = async (
  req: Request,
  res: Response,
) => {
  const userId = req.user.id;

  const { id } = req.params;

  const application = await getApplicationById(userId, id);

  res.json({
    success: true,
    data: application,
  });
};

export const updateApplicationController = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params;

  const userId = req.user.id;

  const data = updateApplicationSchema.parse(req.body);

  const application = await updateApplication(userId, id, data);

  res.json({
    success: true,
    data: application,
  });
};

export const deleteApplicationController = async (
  req: Request,
  res: Response,
) => {
  const { id } = req.params;

  const userId = req.user.id;

  const result = await deleteApplication(userId, id);

  res.json({
    success: true,
    data: result,
  });
};
