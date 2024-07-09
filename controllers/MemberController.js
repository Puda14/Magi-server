const MemberService = require("../services/MemberService");
const { sendEmail } = require("../utils/mail");

exports.createMember = async (req, res) => {
    try {
        if (!req.body || !req.body.email) {
            throw new Error("Email is required.");
        }
        const isExist = await MemberService.getMemberByEmail(req.body.email);
        if (isExist) return res.status(400).send("Member already exists...");
        const Member = await MemberService.createMember(req.body);
        sendEmail(req.body.email, req.body.name);
        res.status(200).json({ data: Member, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMemberById = async (req, res) => {
    try {
        const Member = await MemberService.getMemberById(req.params.id);
        res.status(200).json({ data: Member, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllMembers = async (req, res) => {
    try {
        const Members = await MemberService.getAllMembers();
        res.status(200).json({ data: Members, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};