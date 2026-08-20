const mongoose = require('mongoose');

const refreshSchema = new mongoose.Schema({
    refreshToken: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "auth"
    },
}, { timestamps: true });

module.exports = mongoose.models.RefreshToken || mongoose.model("RefreshToken", refreshSchema); 