const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config(); // This keeps our database password secret

const app = express();
app.use(cors());
app.use(express.json());

// 1. Connect to MongoDB (Replace with your connection string later)
const MONGO_URI = "your_mongodb_connection_string_here";
mongoose.connect(MONGO_URI)
  .then(() => console.log("ZIHUB Database Connected!"))
  .catch(err => console.log("Database Error:", err));

// 2. Create a 'Schema' (This is the blueprint for a User)
const UserSchema = new mongoose.Schema({
  fullName: String,
  nrcNumber: String,
  nrcPhotoUrl: String,
  verified: { type: Boolean, default: false }, // For the CEO to approve
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

// 3. Configure File Uploads
const upload = multer({ dest: 'uploads/' });

// 4. The Registration Route
app.post('/api/register', upload.single('nrcPhoto'), async (req, res) => {
  try {
    const newUser = new User({
      fullName: req.body.fullName,
      nrcNumber: req.body.nrcNumber,
      nrcPhotoUrl: req.file ? req.file.path : ""
    });

    await newUser.save();
    res.status(200).json({ message: "Registration saved to Database!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving to database" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server active on port ${PORT}`));
