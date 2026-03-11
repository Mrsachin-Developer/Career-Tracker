import express from "express";
import authRouter from "./modules/auth/auth.routes.js";
import analyticsRoutes from "./modules/analytics/analytics.routes.js";
import applicationRoutes from "./modules/applications/application.routes.js";
import adminRoutes from "./modules/admin/admin.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/applications", applicationRoutes);
app.use("/analytics", analyticsRoutes);
app.use("/admin", adminRoutes);
app.use(errorHandler);
export default app;
