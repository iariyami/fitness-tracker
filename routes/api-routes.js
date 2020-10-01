// Node Modules
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const db = require("../models")

// Exports API Routes
module.exports = (app) => {

    app.get("/api/workouts", async (req, res) => {
        try {
            const allWorkouts = await db.Workout.find({});
            res.json(allWorkouts);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    });

    app.get("/api/workouts/range", async (req, res) => {
        try {
            const workoutData = await db.Workout.find({});
            res.json(workoutData);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    });

    app.post("/api/workouts", async (req, res) => {
        const now = new Date();
        try {
            const newWorkout = await db.Workout.create({ day: now });
            res.json(newWorkout);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    });

    app.put("/api/workouts/:id", async (req, res) => {
        try {
            const currentWorkout = await db.Workout.findById(req.params.id);
            currentWorkout.exercises.push(req.body);
            await currentWorkout.save();
            res.json(currentWorkout);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    });
};