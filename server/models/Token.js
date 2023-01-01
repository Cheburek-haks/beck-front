const { Schema, model } = require("mongoose");

const shema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "USer" },
    refreshToken: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("Token", shema);
