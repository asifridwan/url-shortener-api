import express from 'express';
import { generateShortURL } from '../controllers/urlController.js';

export const router = express.Router();

router.post('/', generateShortURL);