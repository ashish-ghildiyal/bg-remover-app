import express from 'express';
import { upload } from '../middleware/multer.js';
import { bgRemoverImage } from '../controllers/image.controller.js';

const imageRouter = express.Router();

imageRouter.post('/upload', upload.single('image'), bgRemoverImage);

export default imageRouter