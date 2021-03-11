const express = require("express");
const User = require("../models/user");
const Game = require("../models/game");
const Games = require("../models/games");
const router = express.Router();


router.get("/games/:id", (req, res) => {
  Games.findById(req.params.id, (err, obj) => {
    if (err) {
      console.log(err);
      res.status(200).json({ msg: err });
    } else {
      res.status(200).json(obj);
    }
  });
});

router.post("/games", (req, res) => {
  const data = {
    title: req.body.title,
    genre: req.body.genre,
    platform: req.body.platform,
    gameDeveloper: req.body.gameDeveloper,
    releaseDate: req.body.releaseDate,
    score: req.body.score,
    summary: req.body.summary,
  };
  new Games(data).save((err, obj) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(obj);
    }
  });
});

router.get("/game/:id", (req, res) => {
  Game.findById(req.params.id, (err, obj) => {
    if (err) {
      console.log(err);
      res.status(200).json({ msg: err });
    } else {
      res.status(200).json(obj);
    }
  });
});

router.post("/game", (req, res) => {
  const data = {
    title: req.body.title,
    genre: req.body.genre,
    platform: req.body.platform,
    gameDeveloper: req.body.gameDeveloper,
    releaseYear: req.body.releaseYear,
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
  User.findById(req.params.id, (err, obj) => {
    if (err) {
      console.log(err);
      res.status(200).json({ msg: err });
    } else {
      res.status(200).json(obj);
    }
  });
});

router.post("/", (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  console.log(data);
  new User(data).save((err, obj) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(obj);
    }
  });
});

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, obj) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(obj);
    }
  });
});

module.exports = router;
