const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    description: String,
    imgName: String,
    imgPath: String,
}, {
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
    });

module.exports = mongoose.model("Movie", movieSchema);