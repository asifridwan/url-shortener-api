import express from 'express';
import { generateShortURL, redirectToOriginalURL, showAnalytics } from '../controllers/urlController.js';

export const router = express.Router();

router.get('/:shortId', redirectToOriginalURL);
router.get('/analytics/:shortId', showAnalytics);
router.post('/url', generateShortURL);