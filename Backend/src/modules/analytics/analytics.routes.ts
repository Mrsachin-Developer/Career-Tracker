import { Router } from "express";
import { requireAuth } from "../../middleware/requireAuth.js";
import { getDashboardAnalyticsController } from "./analytics.controller.js";

const router = Router();

router.get("/dashboard", requireAuth, getDashboardAnalyticsController);

export default router;
