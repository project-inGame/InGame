const mongoose = require("mongoose");

const Game = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  releaseYear: { type: Number, required: true },
});

module.exports = mongoose.model("game", Game);
