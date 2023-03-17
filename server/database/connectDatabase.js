import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
console.log("connectDB", process.env.MONGODB_URL);
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDatabase;
