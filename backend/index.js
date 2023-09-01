const express = require('express');
const multer = require('multer');
const app = express();
const port = 5000;

// Set up storage for uploaded images
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define a route to handle image uploads
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req);
  if (!req.file) {
    return res.status(400).json({ message: 'No image uploaded' });
  }

  // Access the uploaded image data through req.file.buffer
  // You can process the image or store it as needed
  const imageBuffer = req.file.buffer;
  
  // For simplicity, we'll just send a success response
  res.json({ message: 'Image uploaded successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
