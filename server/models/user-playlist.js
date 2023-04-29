const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  items: [
    {
      title: {
        type: String,
        required: true,
      },
      poster_path: {
        type: String,
        required: true,
      },
      id: {
        type: Number,
        required: true,
      },
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Playlist", playlistSchema);
