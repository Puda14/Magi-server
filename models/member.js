const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, minlength: 3, maxlength: 30 },
        email: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 200,
            unique: true,
        },
        phone: {
            type: String,
            minlength: 9,
            maxlength: 22,
        },
        address: {
            type: String,
            required: false,
            minlength: 3,
            maxlength: 1024,
        },
        role: {
            type: String,
            default: "Member",
        }
    },
    { timestamps: true }
);

const Member = mongoose.model("Members", memberSchema);

module.exports = Member;