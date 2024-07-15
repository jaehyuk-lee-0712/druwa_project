const mongoose = require("mongoose");
const DTstoreBasicSchema = new mongoose.Schema(
  {
    dtName: {
      type: String,
      required: true,
    },
    dtAddress: {
      type: String,
      required: true,
    },
    dtLat: {
      type: Number,
      required: true,
    },
    dtLon: {
      type: Number,
      required: true,
    },
    dtlCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DtCategorys",
      required: true,
    },
    deleteYn: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const DTstoreBasicModel = mongoose.model(
  "DTstroeBasicModel",
  DTstoreBasicSchema
);
module.exports = DTstoreBasicModel;
