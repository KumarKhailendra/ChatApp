const mongoose = require("mongoose");

const SportsCategoryModel = mongoose.Schema(
  {
    sportName: { type: String, trim: true },
    pic: {
        type: "String",
        required: true,
    },
  },
  { timestamps: true }
);

const SportsCategory = mongoose.model("SportsCategory", SportsCategoryModel);

module.exports = SportsCategory;