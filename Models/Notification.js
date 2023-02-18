//Notofication model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    senderId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Notification", NotificationSchema);
