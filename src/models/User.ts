import { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
  name: string;
  role: string;
  fcmToken: string;
}

const userSchema = new Schema<IUser>({
  name: String,
  role: { type: String, enum: ["customer", "driver"] },
  fcmToken: String,
});
export const User = model<IUser>("User", userSchema);
