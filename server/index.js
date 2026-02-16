const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config(); // Loads your MONGO_URI from the .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Connect to MongoDB Atlas
// CEO Note: This uses the secret string you put in your .env file
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Success! ZIHUB is connected to MongoDB Atlas."))
  .catch(err => console.log("❌ Connection Failed. Check your password in .env or IP access:", err));

// 2. Define the User "Blueprint" (Schema)
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  nrcNumber: { type: String, required: true },
  nrcPhotoPath: String,
  verified: { type: Boolean, default: false },
  registrationDate: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// 3. Configure how to handle the NRC Photo Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, 'NRC-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// 4. The Registration Route (This catches the data from the Frontend)
app.post('/api/register', upload.single('nrcPhoto'), async (req, res) => {
  try {
    const { fullName, nrcNumber } = req.body;
    
    // Create the new user entry
    const newUser = new User({
      fullName: fullName,
      nrcNumber: nrcNumber,
      nrcPhotoPath: req.file ? req.file.path : 'no-photo'
    });

    // Save to MongoDB
    await newUser.save();
    
    console.log(`👤 New User Registered: ${fullName}`);
    res.status(200).json({ message: "Data saved successfully to ZIHUB vault!" });

  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ error: "Failed to save registration." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 ZIHUB Engine running on port ${PORT}`);
});
module.exports = app;
