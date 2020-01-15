const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: null
    },
    lastName: {
      type: String,
      default: null
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      unique: true,
      required: true
    },
    verificationToken: {
      type: String,
      default: null
    },
    verified: {
      type: Boolean,
      default: false
    },
    deletedAt: {
      type: Date,
      default: null
    }
  },
  { collection: "Users" }
);

userSchema.set("timestamps", true);

module.exports = mongoose.model("Users", userSchema);
