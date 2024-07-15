const mongoose = require("mongoose");
const DtCategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },

    deleteYn: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const DtCategoryModel = mongoose.model("DtCategoryModel", DtCategorySchema);
module.exports = DtCategoryModel;
