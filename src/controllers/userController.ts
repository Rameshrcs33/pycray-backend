import { Request, Response } from "express";
import { User } from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const getUserById = async (req: Request, res: Response) => {
  try {
    const users = await User.findById(req.params.id);
    res.json(users);
    if (!users) {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
