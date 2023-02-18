//follow model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    followerId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Follow", FollowSchema);
