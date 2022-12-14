const express = require("express");
const { User, Show } = require("../models/index.js");
const router = express.Router(); // creates single route. New router object to handle requests
const app = express();

//instance of single route that gets all Users
router.route("/").get(async (req, res) => {
  const user = await User.findAll();
  res.send(user);
});

//or
// app.get("/", async (req, res) => {
//   const user = await User.findAll();
//   res.send(user);
// });

//get one user by their id
router.route("/:id").get(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.send(user);
});

//or
// app.get("/:id", async (req, res) => {
//   const user = await User.findByPk(req.params.id);
//   res.send(user);
// });

//get all shows watched by user
router.route("/:id/showsWatched").get(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  const getShowsWatched = await user.getShows();
  res.send(getShowsWatched);
});

//or
// app.get("/:id/showsWatched", async (req, res) => {
//   const user = await User.findByPk(req.params.id);
//   const show = await user.getShows();
//   res.send(show);
// });

//put updated and add sho if user has watched it
router.route("/:id/showsId/:showsWatched").get(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  const getShowsId = await Show.findByPk(req.params.showsId);
  await user.addShows(getShowsId);
  const getShowsWatched = await user.getShows();
  res.send(getShowsWatched);
});
