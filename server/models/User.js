const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shema = new Schema(
  {
    name: { Type: String },
    email: { Type: String, required: true, unique: true },
    password: { Type: String },
    completedMeetings: { Type: String },
    image: String,
    profession: { type: Schema.Types.ObjectId, ref: "Profession" },
    qualities: [{ type: Schema.Types.ObjectId, ref: "Qualities" }],
    rate: Number,
    sex: { type: String, enum: ["male", "female", "other"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", shema);
