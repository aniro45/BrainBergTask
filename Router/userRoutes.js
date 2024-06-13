// routes/userRoutes.mjs
import express from "express";
import {
    createUser,
    getUser,
    getUserById,
    updateUser,
} from "./../Controllers/userController.js";

const router = express.Router();

router.post("/", createUser);

router.get("/", getUser);

router.get("/:id", getUserById);

router.patch("/:id", updateUser);

export default router;
