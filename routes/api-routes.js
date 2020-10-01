const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const db = require("../models")

app.post("/submit", ({ body }, res) => {
    const book = body;

    book.read = false;

    db.books.save(book, (error, saved) => {
        if (error) {
            console.log(error);
        } else {
            res.send(saved);
        }
    });
});

app.get("/read", (req, res) => {
    db.books.find({ read: true }, (error, found) => {
        if (error) {
            console.log(error);
        } else {
            res.json(found);
        }
    });
});

app.get("/unread", (req, res) => {
    db.books.find({ read: false }, (error, found) => {
        if (error) {
            console.log(error);
        } else {
            res.json(found);
        }
    });
});

app.put("/markread/:id", ({ params }, res) => {
    db.books.update(
        {
            _id: mongojs.ObjectId(params.id)
        },
        {
            $set: {
                read: true
            }
        },

        (error, edited) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(edited);
                res.send(edited);
            }
        }
    );
});

app.put("/markunread/:id", ({ params }, res) => {
    db.books.update(
        {
            _id: mongojs.ObjectId(params.id)
        },
        {
            $set: {
                read: false
            }
        },

        (error, edited) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(edited);
                res.send(edited);
            }
        }
    );
});
