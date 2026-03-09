import client from "../../prisma.js";
import { AppError } from "../../utils/AppError.js";
import { z } from "zod";
import {
  createApplicationSchema,
  updateApplicationSchema,
} from "./application.schema.js";

type CreateApplicationInput = z.infer<typeof createApplicationSchema>;
type UpdateApplicationInput = z.infer<typeof updateApplicationSchema>;

export const createApplication = async (
  userId: string,
  data: CreateApplicationInput,
) => {
  const application = await client.application.create({
    data: {
      ...data,
      userId,
    },
  });

  return application;
};

export const getApplications = async (userId: string) => {
  const applications = await client.application.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return applications;
};

export const getApplicationById = async (
  userId: string,
  applicationId: string,
) => {
  const application = await client.application.findFirst({
    where: {
      id: applicationId,
      userId,
    },
  });

  if (!application) {
    throw new AppError("Application not found", 404);
  }

  return application;
};

export const updateApplication = async (
  userId: string,
  applicationId: string,
  data: UpdateApplicationInput,
) => {
  const application = await client.application.findFirst({
    where: {
      id: applicationId,
      userId,
    },
  });

  if (!application) {
    throw new AppError("Application not found", 404);
  }

  const updated = await client.application.update({
    where: {
      id: applicationId,
    },
    data,
  });

  return updated;
};

export const deleteApplication = async (
  userId: string,
  applicationId: string,
) => {
  const application = await client.application.findFirst({
    where: {
      id: applicationId,
      userId,
    },
  });

  if (!application) {
    throw new AppError("Application not found", 404);
  }

  await client.application.delete({
    where: {
      id: applicationId,
    },
  });

  return { message: "Application deleted successfully" };
};
