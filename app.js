import express from "express";
import taskRouter from "./Router/taskRoutes.js";
import userRouter from "./Router/userRoutes.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Hello from base middleware 😊");
    next();
});

app.use("/api/v1/tasks", taskRouter);

app.use("/api/v1/users", userRouter);

export default app;
