const express = require("express");
const {compile} = require("../controllers/compiler.js");
const {getstatus} = require("../controllers/getstatus.js");


const router = express.Router();

router.post("/run",compile);
router.get("/status",getstatus)

module.exports = router;
