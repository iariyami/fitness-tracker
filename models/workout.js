const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            required: [true, "Day is required"],
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter exercises."
                },
                name: {
                    type: String,
                    required: "Name of the exercise."
                },
                duration: {
                    type: Number
                },
                weight: {
                    type: Number,
                    required: "Amount of weight is required"
                },
                reps: {
                    type: Number,
                    required: "Reps per workout is required"
                },
                sets: {
                    type: Number,
                    required: "Amount of sets is required"
                },
                distance: {
                    type: Number
                },
            },
        ],
    });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;