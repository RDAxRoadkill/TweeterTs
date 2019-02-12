"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
router.route('/register/contractor')
    .get(function (req, res) {
    console.log("First");
});
exports["default"] = router;
