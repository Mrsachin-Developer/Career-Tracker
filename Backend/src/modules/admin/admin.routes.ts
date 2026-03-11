import { Router } from "express";
import { requireAuth } from "../../middleware/requireAuth.js";
import { requireRole } from "../../middleware/requireRole.js";

import {
  getAllUsersController,
  getAdminStatsController,
  deleteUserController,
} from "./admin.controller.js";

const router = Router();

router.get("/users", requireAuth, requireRole("ADMIN"), getAllUsersController);

router.get(
  "/stats",
  requireAuth,
  requireRole("ADMIN"),
  getAdminStatsController,
);
router.delete(
  "/users/:id",
  requireAuth,
  requireRole("ADMIN"),
  deleteUserController,
);
export default router;
