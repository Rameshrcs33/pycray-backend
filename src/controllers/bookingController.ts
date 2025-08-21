import { Request, Response } from "express";
import { Booking } from "../models/Booking";

export const requestRide = async (req: Request, res: Response) => {
  try {
    const { customerId, pickup, destination } = req.body;
    const booking = await Booking.create({ customerId, pickup, destination });

    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export const getRequest = async (req: Request, res: Response) => {
  try {
    const requested = await Booking.find({ status: "requested" });
    res.json(requested);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export const acceptRequest = async (req: Request, res: Response) => {
  try {
    const { status, driverId } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status, driverId },
      { new: true }
    );

    if (!booking) return res.status(404).send("Not found");

    // 🔔 Notify Customer via FCM
    // await sendPushNotification(booking.customerId, {
    //   title: "Ride Update",
    //   body: `Your ride was ${status}`,
    //   data: { bookingId: booking._id.toString(), status },
    // });

    res.json(booking);
  } catch (error: any) {
    res.status(400).json({ error: error });
  }
};
