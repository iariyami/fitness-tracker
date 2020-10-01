const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            required: [true, "day is required"],
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter exercises.",
                },
                name: {
                    type: String,
                    required: " Name of the exercise.",
                },
                duration: {
                    type: Number,
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },
            },
        ],
    });

module.exports = workout;