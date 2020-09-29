const express = require("express");
const path = require("path");

module.exports = function (app) {
    // Sets index.html page as the initial landing page for server
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

    // Sets exercise.html page as the /exercise route on server
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/exercise.html"));
    });

    // Sets exercise.html page as the /exercise route on server
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/stats.html"));
    });
};