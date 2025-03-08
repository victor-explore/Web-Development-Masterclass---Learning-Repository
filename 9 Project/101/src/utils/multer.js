import multer from "multer"; // Import the multer package for handling file uploads
import path from "path"; // Import path module for working with file paths

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); // Store uploaded files in the public/temp directory
  },
  filename: function (req, file, cb) {
    // Create a unique filename with original name and timestamp
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Configure file filter to only allow image files
const fileFilter = (req, file, cb) => {
  // Accept only jpeg, jpg, png, and gif files
  const allowedFileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
  ];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    cb(
      new Error(
        "Unsupported file format. Only JPEG, JPG, PNG, and GIF are allowed."
      ),
      false
    ); // Reject the file
  }
};

// Create and export the multer middleware
export const upload = multer({
  storage: storage, // Use the configured storage
  fileFilter: fileFilter, // Use the configured file filter
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
  },
});
