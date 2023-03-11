import express from "express";
import connectDatabase from "./database/connectDatabase.js";
import cors from "cors";
import User from "./models/User.js";
import validator from "validator";

const app = express();
// Middleware
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// Routes
app.post("/api/user/create", async (req, res) => {
  console.log("Received request to create user:", req.body);
  const { firstName, surname, email, password } = req.body;
  console.log(firstName, surname, email, password);

  try {
    // Connect to database
    await connectDatabase();

    // Create user object
    const user = new User(req.body);

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

app.post("/api/user/login", (req, res) => {
  const { email, password } = req.body;

  // validate email
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  // TODO: Look up user in database using email and password

  // TODO: Return appropriate response based on whether user was found
  // and whether password matches
});

export default app;
