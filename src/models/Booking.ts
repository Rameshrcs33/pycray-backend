import { Schema, model, Document } from "mongoose";

export interface IBooking extends Document {
  customerId: Schema.Types.ObjectId;
  pickup: string;
  destination: string;
  status: string;
  driverId: Schema.Types.ObjectId;
}

const bookingSchema = new Schema<IBooking>(
  {
    customerId: { type: Schema.Types.ObjectId, ref: "User" },
    pickup: String,
    destination: String,
    status: {
      type: String,
      enum: ["requested", "accepted", "rejected"],
      default: "requested",
    },
    driverId: { type: Schema.Types.ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

export const Booking = model<IBooking>("Booking", bookingSchema);
