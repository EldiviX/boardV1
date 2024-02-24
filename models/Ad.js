import mongoose from "mongoose";

const AdSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        avatarUrl: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Ad", AdSchema);

