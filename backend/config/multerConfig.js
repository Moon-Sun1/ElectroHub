import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let category = req.body.category_name || req.body.category || 'Accessories';
    const categoryMap = {
      '1': 'SmartPhones',
      '2': 'Laptops',
      '3': 'Gaming',
      '4': 'Accessories',
      '5': 'Cameras',
      'SmartPhones': 'SmartPhones',
      'Laptops': 'Laptops',
      'Gaming': 'Gaming',
      'Accessories': 'Accessories',
      'Cameras': 'Cameras',
    };
    category = categoryMap[category] || 'Accessories';
    const dest = path.join(
      __dirname,
      '..',
      '..',
      'frontend',
      'src',
      'assets',
      'products image',
      category
    );
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload; 