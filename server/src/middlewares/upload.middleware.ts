import multer from "multer";
import path from "path";
import fs from "fs";

// যদি uploads/avatars ফোল্ডারটি না থাকে, তবে কোড দিয়ে তৈরি করে নেবে
const uploadDir = "uploads/avatars";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // ফাইলের নাম ইউনিক করার জন্য (যেমন: 1715843920123-myphoto.jpg)
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

export const upload = multer({ 
  storage, 
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // সর্বোচ্চ ২ মেগাবাইট ফাইল আপলোড করা যাবে
});