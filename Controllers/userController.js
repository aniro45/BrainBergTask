// controllers/userController.mjs
import User from "./../Models/userModel.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.find();
        if (!user) {
            return res.status(404).json();
        }
        res.json({ user });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json();
        }
        res.json({ user });
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "password"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update),
    );

    if (!isValidOperation) {
        return res.status(400).json({ error: "Invalid updates!" });
    }

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json();
        }

        updates.forEach((update) => (user[update] = req.body[update]));
        if (user.isModified("password")) {
            user.password = await bcrypt.hash(user.password, 8);
        }
        await user.save();

        res.json({ user });
    } catch (error) {
        res.status(400).json(error);
    }
};
