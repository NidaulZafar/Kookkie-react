import mongoose from "mongoose";
// process.env.MONGODB_URL
const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Settly:Settly123@cluster0.b2f5vli.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDatabase;
