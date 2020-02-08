const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const heroSchema = new Schema({ 
    realName: { type: String, required: true },
    alias: { type: String, required: true },
    team: { type: String, required: true }
});

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;