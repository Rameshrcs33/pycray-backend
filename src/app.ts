import express from "express";
import userRoutes from "./routers/userRouter";
import bookingRoutes from "./routers/bookingRouter";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/booking", bookingRoutes);

export default app;
