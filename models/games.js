const mongoose = require("mongoose");

const Games = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  platform: { type: String, required: true },
  gameDeveloper: { type: String, required: true },
  releaseDate: { type: String, required: true },
  score: { type: Number, required: true },
  summary: { type: String, required: true },
});

module.exports = mongoose.model("games", Games);