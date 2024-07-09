const Member = require("../models/member.js");

exports.createMember = async (memberData) => {
    const { name, email, phone, address } = memberData;
    const newMember = new Member({
        name,
        email,
        phone,
        address,
    });
    return await newMember.save();
};

exports.getAllMembers = async () => {
    return await Member.find();
};

exports.getMemberById = async (id) => {
    return await Member.findById(id);
};

exports.getMemberByEmail = async (email) => {
    return await Member.findOne({ email: email });
};

exports.updateMember = async (id, memberData) => {
    return await Member.findByIdAndUpdate(id, memberData, { new: true });
};

exports.deleteMember = async (id) => {
    return await Member.findByIdAndDelete(id);
};
