import { Request, Response } from "express";
import { Booking } from "../models/Booking";
import { User } from "../models/User";

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
    const requests = await Booking.find({ status: "requested" }).populate(
      "customerId"
    );

    res.json(requests);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export const acceptRequest = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { driverId, action } = req.body;

    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    booking.status = action === "accept" ? "accepted" : "rejected";
    booking.driverId = driverId;
    await booking.save();

    const customer = await User.findById(booking.customerId);
    // if (customer?.fcmToken) {
    //   await sendNotification(customer.fcmToken, {
    //     title: "Ride Update",
    //     body: `Your ride was ${booking.status} by driver`,
    //     data: { bookingId: booking._id.toString(), status: booking.status },
    //   });
    // }

    res.json(booking);
  } catch (error: any) {
    res.status(400).json({ error: error });
  }
};
