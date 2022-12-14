const express = require("express");
const { User, Show } = require("../models/index.js");
const router = express.Router(); // creates single route. New router object to handle requests
const { check, validationResult } = require("express-validator");

module.exports = router;
