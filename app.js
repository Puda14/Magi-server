const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
require("dotenv").config();
const memberRouter = require("./routes/MemberRouter");
const loginRouter = require("./routes/LoginRouter");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
const PORT = process.env.PORT || 5000;

console.log("Hello")

app.get('/', function (req, res) {
    res.send("Hello ! I'm Magi !");
});


app.listen(PORT, () => {
    console.log(`Application listening on ${PORT} !`);
});

//configure mongoose
const uri = process.env.DB_URI;
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB connection successful...");
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err.message);
    });

app.use("/api/member", memberRouter);
app.use("/api/login", loginRouter);

module.exports = app;