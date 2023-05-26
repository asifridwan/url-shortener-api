import { nanoid } from 'nanoid';
import { URL } from '../models/urlSchema.js';

export async function generateShortURL(req, res) {
    if(!req.body.url) {
        return res.status(400).send('URL is required !');
    }

    const shortID = nanoid(8);

    await URL.create({
        shortId: shortID,
        originalURL: req.body.url,
        visitHistory: []
    });

    return res.status(200).send(`Your short ID is ${shortID}`);
}