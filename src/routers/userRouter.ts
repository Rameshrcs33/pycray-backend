import { Router } from "express";
import {
  createUser,
  getUsers,
  updateFcmToken,
} from "../controllers/userController";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.put("/fcm-token", updateFcmToken);

export default router;
