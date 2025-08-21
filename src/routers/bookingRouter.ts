import { Router } from "express";
import {
  requestRide,
  getRequest,
  acceptRequest,
} from "../controllers/bookingController";

const router = Router();

router.post("/", requestRide);
router.get("/", getRequest);
router.put("/updateride", acceptRequest);

export default router;
