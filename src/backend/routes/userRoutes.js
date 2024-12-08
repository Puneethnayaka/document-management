const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();
const Document = require("../models/Document");
const path = require("path");
const multer = require("multer");

// Signup Route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error creating user", message: err.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid credentials" });
    }

    // Log passwords to check if comparison is correct
    console.log("Stored password:", user.password);
    console.log("Entered password:", password);

    // Directly compare the entered password with the stored password
    if (password === user.password) {
      res.status(200).json({ status: "success", message: "Login successful" });
    } else {
      res.status(400).json({ status: "error", message: "Invalid credentials" });
    }
  } catch (err) {
    res
      .status(500)
      .json({
        status: "error",
        message: "Error logging in",
        error: err.message,
      });
  }
});

// New Route to get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users); // Send users data as a response
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching users", message: err.message });
  }
});

// Configure Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads")); // Saves files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname); // Unique file name
  },
});
const upload = multer({ storage: storage });

// POST route for uploading documents
router.post("/documents/upload", upload.single("file"), async (req, res) => {
  if (!req.file || !req.body.userId || !req.body.name) {
    return res.status(400).send("File, userId, and name are required.");
  }

  try {
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(404).send("User not found.");
    }

    const document = {
      name: req.body.name,
      filePath: path.join(__dirname, "../uploads", req.file.filename),
      uploadedAt: new Date(),
    };

    user.documents.push(document); // Assuming the 'User' model has a 'documents' array
    await user.save();

    res.status(200).json({ message: "File uploaded and saved to user.", user });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error uploading document", message: err.message });
  }
});


router.post("/ask", (req, res) => {
  const { question } = req.body;

  if (!question) {
      return res.status(400).json({ error: 'Question is required' });
  }

  const answer = `This is a response to your question: ${question}`;
  const documentExcerpts = [
      "Document excerpt 1 related to the question.",
      "Document excerpt 2 related to the question.",
  ];

  res.json({ answer, documentExcerpts });
});


module.exports = router;
