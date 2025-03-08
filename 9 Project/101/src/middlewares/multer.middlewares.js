import multer from "multer"; // Import multer

const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
}); // Use memory storage

export const upload = multer({ storage }); // Create multer upload instance
