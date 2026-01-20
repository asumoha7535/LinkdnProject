import mongoose from "mongoose";

const connectDb = async () => {
  try {
    console.log("Connecting to:", process.env.URI);
    await mongoose.connect(process.env.URI);
    console.log("db connected");
  } catch (err) {
    console.log("db error:", err.message);
    console.log(err);
  }
};

export default connectDb;
