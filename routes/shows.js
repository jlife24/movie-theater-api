const express = require("express");
const { User, Show } = require("../models/index.js");
const router = express.Router(); // creates single route. New router object to handle requests
const { check, validationResult } = require("express-validator");

//Get all shows
router.route("/").get(async (req, res) => {
  const shows = await Show.findAll();
  res.json(shows);
});

//Get one show
router.route("/:id").get(async (req, res) => {
  const show = await Show.findAll({ where: { id: req.params.id } });
  res.json(show);
});

//Get show a particular show genre
router.route("/genres/:genre").get(async (req, res) => {
  const show = await Show.findAll({ where: { genre: req.params.genre } });
  res.json(show);
});

//updating rating of a show
router.put("/:id/:rating", async (req, res) => {
  await Show.update(
    { rating: req.params.rating },
    { where: { id: req.params.id } }
  );
  const updateRating = await Show.findAll();
  res.json(updateRating);
});

// Put update status of a show
router.put("/:id/:status", async (req, res) => {
  await Show.update(
    { status: req.params.status },
    { where: { id: req.params.id } }
  );
  const updateShow = await Show.findAll();
  res.json(updateShow);
});

//delete a show
router.delete("/:id", async (req, res) => {
  const deletedShow = await Show.destroy({ where: { id: req.params.id } });
  const showsdeleted = await deletedShow.findAll();
  res.send(showsdeleted);
});
module.exports = router;
