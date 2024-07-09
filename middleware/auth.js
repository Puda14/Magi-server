const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token)
        return res.status(401).send("Access denied. Not authenticated...");
    try {
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const decoded = jwt.verify(token, jwtSecretKey);
        req.Member = decoded;
        next();
    } catch (er) {
        res.status(400).send("Invalid auth token...");
    }
};


// isAdmin
const isAdmin = (req, res, next) => {
    auth(req, res, () => {
        if ((req.Member && req.Member.role == "Admin")) {
            next();
        } else {
            res.status(403).send("Access denied. Not authorized...");
        }
    });
};



module.exports = { isAdmin };