const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// 2. Setup Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'zihub_nrcs',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});
const upload = multer({ storage: storage });

// 3. MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ ZIHUB Database Online"))
  .catch(err => console.log("❌ DB Error:", err));

// 4. User Schema
const User = mongoose.model('User', new mongoose.Schema({
  fullName: String,
  nrcNumber: String,
  nrcPhotoUrl: String, // We now store the URL from the cloud
  verified: { type: Boolean, default: false }
}));

// 5. Submit Route
app.post('/api/register', upload.single('nrcPhoto'), async (req, res) => {
  try {
    const newUser = new User({
      fullName: req.body.fullName,
      nrcNumber: req.body.nrcNumber,
      nrcPhotoUrl: req.file.path // This is the web link to the photo
    });
    await newUser.save();
    res.status(200).json({ success: true, message: "Verification Sent!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = app;
