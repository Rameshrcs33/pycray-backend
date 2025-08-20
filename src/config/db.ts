import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const mongo_url: any = process.env.MONGO_URL || {};

  try {
    await mongoose.connect(mongo_url);
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
