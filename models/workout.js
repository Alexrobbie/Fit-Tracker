const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },

    exercises: [{
        //"type": String,
        "name": String,
        "time": Number,
        "distance": Number,
        "weight": Number,
        "reps": Number,
        "sets": Number
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;