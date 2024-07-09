const express = require("express");
const {
    createMember,
    getMemberById,
    getAllMembers,
} = require("../controllers/MemberController.js");
const { isAdmin } = require("../middleware/auth.js");

const router = express.Router();
router.route("/").get(isAdmin, getAllMembers).post(isAdmin, createMember);
router.route("/:id").get(isAdmin, getMemberById)
module.exports = router;