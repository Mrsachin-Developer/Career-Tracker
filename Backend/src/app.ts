import express from "express";
import authRouter from "./modules/auth/auth.routes.js";
import analyticsRoutes from "./modules/analytics/analytics.routes.js";
import applicationRoutes from "./modules/applications/application.routes.js";

const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/applications", applicationRoutes);
app.use("/analytics", analyticsRoutes);
export default app;
