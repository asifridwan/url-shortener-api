import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    originalURL: {
        type: String,
        required: true
    },
    clicks: {
        type: Number
    }
}, 
{
    timestamps: true
});

export const URL = mongoose.model('url', urlSchema);