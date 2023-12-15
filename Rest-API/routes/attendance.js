const express = require("express");
const router = express.Router();
const{getAttendance,getAllAttendance} = require("../controllers/products")

router.route("/").get(getAttendance);
router.route("/testing").get(getAllAttendance);

module.exports = router;
