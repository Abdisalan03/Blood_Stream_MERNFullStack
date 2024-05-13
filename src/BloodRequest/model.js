const mongoose = require("mongoose").default;

const BloodRequestSchema = new mongoose.Schema(
    {
        bloodType: {
            type: String,
            required: [true, "Blood type is required"],
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        },
        bloodRhesus: {
            type: String,
            required: [true, "Blood rhesus is required"],
            enum: ["+", "-"],
        },
        quantity: {
            type: Number,
            required: [true, "Quantity is required"],
            min: [1, "Quantity must be at least 1"],
        },
        status: {
            type: String,
            required: [true, "Status is required"],
            enum: ["pending", "accepted", "rejected"],
        },
    },
    { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("BloodRequest", BloodRequestSchema)
