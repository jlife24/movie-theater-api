const express = require("express");
const { User, Show } = require("../models/index");
const router = express.Router(); // creates single route. New router object to handle requests

//instance of single route that gets all Users

router.route("/").get(async (req, res) => {
  const user = await User.findAll();
  res.json(user);
});

router.route("/:id").get(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

// get all shows watched by user

router.get("/:id/shows", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  const getShowsWatched = await user.getShows();
  res.json(getShowsWatched);
});

// put updated and add sho if user has watched it
router.put("/:id/shows/:showsId", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  const getShow = await Show.findByPk(req.params.showsId);
  await user.addShow(getShow);
  res.json(await Show.findByPk(req.params.showsId));
});

module.exports = router;
