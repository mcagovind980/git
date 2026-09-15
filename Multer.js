const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({
    dest: "uploads/"
});

app.post("/upload", upload.single("file"), (req, res) => {

    console.log("Username:", req.body.username);
    console.log("File:", req.file);

    res.json({
        username: req.body.username,
        file: req.file
    });
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});