import { Request, Response } from "express";
import { Booking } from "../models/Booking";
import { User } from "../models/User";
import { sendPushNotification } from "../utils/fcm";

export const requestRide = async (req: Request, res: Response) => {
  try {
    const { customerId, pickup, destination } = req.body;
    const booking: any = await Booking.create({
      customerId,
      pickup,
      destination,
    });

    if (!booking) return res.status(404).send("Booking creation failed");

    const customer: any = await User.find({ role: "driver" });
    const fcmToken = customer[0]?.fcmToken;

    const id = booking?._id?.toString();
    const status = booking?.status;

    if (fcmToken) {
      await sendPushNotification(fcmToken, {
        title: "New Booking placed",
        body: `Your ride was ${status}`,
        data: { bookingId: id, status },
      });
    }

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

export const getAllBooking = async (_req: Request, res: Response) => {
  try {
    const booking = await Booking.find();
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const acceptRequest = async (req: Request, res: Response) => {
  try {
    const { status, driverId } = req.body;
    const booking: any = await Booking.findByIdAndUpdate(
      req.params.id,
      { status, driverId },
      { new: true }
    );

    if (!booking) return res.status(404).send("Not found");

    const customer: any = await User.findById(booking.customerId);
    if (customer?.fcmToken) {
      await sendPushNotification(customer?.fcmToken, {
        title: "Booking Update",
        body: `Your ride was ${status}`,
        data: { bookingId: booking._id.toString(), status },
      });
    }

    res.json(booking);
  } catch (error: any) {
    res.status(400).json({ error: error });
  }
};
