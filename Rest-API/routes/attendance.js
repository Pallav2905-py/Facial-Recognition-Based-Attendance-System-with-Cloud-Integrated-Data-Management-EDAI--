const express = require("express");
const router = express.Router();
const { fetchAllAttendence, fetchForMember } = require("../controllers/attendence")

router.route("/").get(fetchAllAttendence);
router.route("/member").get(fetchForMember);
router.route("/").post(fetchAllAttendence);

module.exports = router;
