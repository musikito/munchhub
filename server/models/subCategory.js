const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = new Schema(
  {
    subcategory: {
      type: String,
      required: true,
      // unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);
mongoose.models = {};
const SubCategory = mongoose.model("Category", categorySchema);

module.exports = SubCategory;
