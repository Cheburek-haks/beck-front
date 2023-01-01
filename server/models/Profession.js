const { Schema, model } = require("mongoose");

const shema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("Profession", shema);
