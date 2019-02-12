"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var routing_1 = require("./routing");
app.use(routing_1["default"]);
app.listen(process.env.PORT || 8000);
console.log("Server up");
