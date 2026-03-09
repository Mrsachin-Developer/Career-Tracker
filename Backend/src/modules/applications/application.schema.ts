import { z } from "zod";
import { Status } from "../../generated/prisma/enums.js";
export const createApplicationSchema = z.object({
  company: z.string().trim().min(2, "minimum 2 character"),

  role: z.string().trim().min(2, "minimum 2 character"),
  status: z.nativeEnum(Status),

  salary: z.number().int().positive().optional(),

  notes: z.string().max(500).optional(),
});

export const updateApplicationSchema = z.object({
  company: z.string().trim().min(2).optional(),

  role: z.string().trim().min(2).optional(),

  status: z.nativeEnum(Status).optional(),

  salary: z.number().int().positive().optional(),

  notes: z.string().max(500).optional(),
});
