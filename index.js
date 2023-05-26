import express from 'express';
import { router } from './routes/urlRouter.js';
import { connectDB } from './models/connection.js';

const app = express();
const PORT = 5000;

connectDB('mongodb://127.0.0.1:27017/url-shortner').then(() => console.log('Database works !'));

app.use(express.json());
app.use('/url', router);

app.listen(PORT, () => console.log(`API running on PORT ${PORT}`));