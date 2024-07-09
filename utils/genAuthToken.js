const jwt = require("jsonwebtoken");

const genAuthToken = (Member) => {
    const secretKey = process.env.JWT_SECRET_KEY

    const token = jwt.sign({
        _id: Member._id,
        name: Member.name,
        email: Member.email,
        role: Member.role,
    },
        secretKey
    );

    return token;
};

module.exports = genAuthToken;