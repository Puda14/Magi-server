const loginService = require("../services/LoginService");
const Joi = require("joi");
const genAuthToken = require("../utils/genAuthToken");


exports.loginMember = async (req, res) => {

    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(3).max(200).required().email(),
    });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    try {

        let MemberInDB = await loginService.loginMember(req.body.email);

        if (!MemberInDB) {
            return res.status(400).send("The account and email address do not exist.");
        }

        const token = genAuthToken(MemberInDB);

        res.send(token);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};