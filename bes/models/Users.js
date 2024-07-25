const mongoose = require("mongoose");
const { Schema, model } = mongoose

const Users = new Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },

    userPassword: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      required: true
    },
    userAddress: {
      type: String,
      required: false
    },
    userPhone: {
      type: String,
      required: true
    }

  },
  { timestamps: true }
);

const UserModel = model("UserModel", Users);
module.exports = UserModel;