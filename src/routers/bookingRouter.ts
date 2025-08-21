import { Router } from "express";
import {
  requestRide,
  getRequest,
  acceptRequest,
  getAllBooking,
} from "../controllers/bookingController";

const router = Router();

router.post("/", requestRide);
router.get("/", getRequest);
router.get("/all", getAllBooking);
router.put("/:id/updateride", acceptRequest);

export default router;
