const express = require("express");
const User = require("../models/user");
const Game = require("../models/game");
const game = require("../models/game");
const router = express.Router();

router.get("/", (req, res) => {
  Game.find({}, (err, obj) => {
      if (err) {
        res.status(500).json({ msg: err });
      } else {
        res.status(200).json(obj);
      }
  });
});

router.post("/", (req, res) => {
  const data = {
    title: req.body.title,
    genre: req.body.genre,
    platform: req.body.platform,
    gameDeveloper: req.body.gameDeveloper,
    releaseDate: req.body.releaseDate,
    score: req.body.score,
    summary: req.body.summary,
  };
   new Game(data).save((err, obj) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(obj);
    }
  });
});

router.get("/:id", (req, res) => {
  Game.findById(req.params.id, (err, obj) => {
    if (err) {
      console.log(err);
      res.status(200).json({ msg: err });
    } else {
      res.status(200).json(obj);
    }
  });
});

router.delete("/:id", (req, res) => {
  Game.findByIdAndDelete(req.params.id, (err, obj) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(obj);
    }
  });
});

module.exports = router;