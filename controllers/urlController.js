import { nanoid } from 'nanoid';
import { URL } from '../models/urlSchema.js';

export async function generateShortURL(req, res) {
    let url = req.body.url;

    if(!url) {
        return res.status(400).send('URL is required !');
    }

    if(!url.includes('http://') || !url.includes('https://')) {
        url = 'https://' + url;
    }

    const shortID = nanoid(8);

    await URL.create({
        shortId: shortID,
        originalURL: url,
        clicks: 0
    });

    return res.status(200).send(`Your short URL is localhost:5000/${shortID}`);
}

export async function redirectToOriginalURL(req, res) {
    const query = await URL.findOneAndUpdate({shortId: req.params.shortId}, {$inc: {clicks: 1}});

    return res.redirect(301, query.originalURL);
}

export async function showAnalytics(req, res) {
    const query = await URL.findOne({shortId: req.params.shortId});

    return res.status(200).send(`This link has been visited ${query.clicks} times`);
}