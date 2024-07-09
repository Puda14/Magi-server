const express = require("express");
const { loginMember } = require("../controllers/LoginController");
const { isAdmin } = require("../middleware/auth.js");
const router = express.Router();

router.route("/").post(isAdmin, loginMember);

module.exports = router;