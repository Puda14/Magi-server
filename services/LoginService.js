const Member = require("../models/member.js");

exports.loginMember = async (email) => {
    return await Member.findOne({ email });
};