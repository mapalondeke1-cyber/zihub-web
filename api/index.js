const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Connect to MongoDB Atlas
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ ZIHUB Database Connected"))
  .catch(err => console.log("❌ Database Connection Error:", err));

// 2. User Schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  nrcNumber: { type: String, required: true },
  nrcPhotoPath: String,
  registrationDate: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// 3. Updated Photo Storage (Points to your server/uploads folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // This matches the folder in your screenshot
    cb(null, 'server/uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, 'NRC-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// 4. Registration Route
app.post('/api/register', upload.single('nrcPhoto'), async (req, res) => {
  try {
    const newUser = new User({
      fullName: req.body.fullName,
      nrcNumber: req.body.nrcNumber,
      nrcPhotoPath: req.file ? req.file.path : 'no-photo'
    });

    await newUser.save();
    res.status(200).json({ message: "Success! Data saved to MongoDB." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save to database." });
  }
});

// 5. Vercel Export (The fix for the connection error)
module.exports = app;

// Local development only
if (require.main === module) {
  app.listen(5000, () => console.log("🚀 Engine running on 5000"));
}
