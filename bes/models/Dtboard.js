const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
  boardTitle: {
    type: String,
    required: true,
  },
  boardAuthor: {
    youName: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  boardViews: {
    type: Number,
    default: 0,
  },
  boardConts: {
    type: String,
    required: true,
  },
});

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
