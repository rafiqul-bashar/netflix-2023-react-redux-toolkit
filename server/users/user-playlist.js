const User = require("../models/user-model");
const Playlist = require("../models/user-playlist");

const getPlaylist = async (req, res, next) => {
  const { id } = req.params;
  // checking for empty or missing  fields
  if (!id) {
    return res.json({
      successful: false,
      message: "userId is required",
    });
  }

  try {
    // check if user exist
    const existedUser = await User.findOne({ _id: id });
    if (!existedUser) {
      return res.status(404).json({
        message: "User Not Found!!",
      });
    }
    const playlist = await Playlist.findOne({ userId: id });

    res.status(201).json({ success: true, playlist });
  } catch (error) {
    next(error);
  }
};

const addToPlaylist = async (req, res, next) => {
  const { id } = req.params;
  const { items } = req.body;
  console.log(req.body);
  // checking for empty or missing  fields
  if (!id) {
    return res.json({
      successful: false,
      message: "userId is required",
    });
  }
  try {
    const existedUser = await User.findOne({ _id: id });
    if (!existedUser) {
      return res.status(404).json({
        message: "User Not Found!!",
      });
    }

    const existedPlaylist = await Playlist.findOne({ userId: id });

    if (!existedPlaylist) {
      const playlist = new Playlist({
        items,
        userId: id,
      });
      await playlist.save();
      return res
        .status(201)
        .json({ message: "Playlist created successfully.", data: playlist });
    }
    // res.status(200).json({ token });
    const result = await Playlist.findByIdAndUpdate(
      {
        _id: existedPlaylist._id,
      },
      { items }
    );
    return res
      .status(201)
      .json({ message: "Playlist updated .", data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPlaylist,
  addToPlaylist,
};
