const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const groupSchema = new Schema({
  group: [
    {
      _id: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
      },

      groupTitle: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 25,
        trim: true,
      },

      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },

      groupAuthor: {
        type: String,
        required: true,
        trim: true,
      },

      groupMembers: {
        type: String,
        required: true,
      },
    },
  ],
});

const Group = model("Group", groupSchema);

module.exports = Group;
