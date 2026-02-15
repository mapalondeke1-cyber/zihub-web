const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Configure where to save the NRC photos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // We will create this folder manually next!
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    // Rename the file to avoid duplicates (e.g., NRC-12345.jpg)
    cb(null, 'NRC-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// 2. The Route to handle Registration
app.post('/api/register', upload.single('nrcPhoto'), (req, res) => {
  console.log("New Registration Received!");
  if(req.body.fullName) console.log("Name:", req.body.fullName);
  
  // Send a success message back to the Frontend
  res.status(200).json({ message: "Registration Successful! Verification Pending." });
});

// 3. Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`ZIHUB Server running on port ${PORT}`));
