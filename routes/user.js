const express = require("express");
const { User, Show } = require("../models/index.js");
const router = express.Router(); // creates single route. New router object to handle requests

//instance of single route that gets all Users
router.route("/").get(async (req, res) => {
  const user = await User.findAll();
  res.send(user);
});

//get one user by their id
router.route("/:id").get(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.send(user);
});

//get all shows watched by user
router.route("/:id/shows").get(async (req, res) => {
  const user = await User.findByPk(req.params.id, { include: Show });
  res.send(user);
});

//put updated and add sho if user has watched it
