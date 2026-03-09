import { Router } from "express";

import {
  createApplicationController,
  getApplicationsController,
  getApplicationByIdController,
  updateApplicationController,
  deleteApplicationController
} from "./application.controller.js";

import { requireAuth } from "../../middleware/requireAuth.js";

const router = Router();

router.post("/", requireAuth, createApplicationController);

router.get("/", requireAuth, getApplicationsController);

router.get("/:id", requireAuth, getApplicationByIdController);

router.patch("/:id", requireAuth, updateApplicationController);

router.delete("/:id", requireAuth, deleteApplicationController);

export default router;