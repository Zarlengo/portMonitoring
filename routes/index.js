// const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");

// API Routes
router.use("/api", apiRoutes);

// HTML Routes
router.use("/", htmlRoutes);

module.exports =  router;