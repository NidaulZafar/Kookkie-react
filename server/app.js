import express from "express";
import connectDatabase from "./database/connectDatabase.js";
import cors from "cors";
import User from "./models/User.js";
import validator from "validator";
import bcrypt from "bcrypt";
import generateToken from "./auth.js";

const app = express();
// Middleware
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// Connect to database
connectDatabase();

// Routes
app.post("/api/user/create", async (req, res) => {
  console.log("Received request to create user:", req.body);
  const { firstName, surname, email, password } = req.body;
  console.log(firstName, surname, email, password);

  try {
    // hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user object
    const user = new User({
      firstName,
      surname,
      email,
      password: hashedPassword,
    });

    // Save user to database
    await user.save();

    // Return success message
    const response = { message: "User created successfully" };
    console.log(response);
    res.status(201).json(response);
    return response;
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error." });
  }
});

app.post("/api/user/login", async (req, res) => {
  const { email, password } = req.body;

  // validate email
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    // Look up user in database using email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if password matches
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    // password matches, generate JWT and send response
    const token = generateToken(user._id);
    const { firstName, surname } = user;
    return res.json({ token, firstName, surname });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error." });
  }
});

export default app;
