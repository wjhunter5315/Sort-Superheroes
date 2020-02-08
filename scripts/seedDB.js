const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGOD_URI || "mongodb://localhost/herosort"
);

const heroSeed = [
    {
       realName: "Tony Stark",
       alias: "Ironman",
       team: "Avengers" 
    },
    {
        realName: "Natasha Rominoff",
        alias: "Black Widow",
        team: "Avengers"
    },
    {
        realName: "Bruce Banner",
        alias: "The Hulk",
        team: "Avengers"
    },
    {
        realName: "Steve Rogers",
        alias: "Captain America",
        team: "Avengers"
    },
    {
        realName: "Jean Grey",
        alias: "Phoenix",
        team: "X-Men"
    },
    {
        realName: "Scott Summers",
        alias: "Cyclops",
        team: "X-Men"
    },
    {
        realName: "Clarice Ferguson",
        alias: "Blink",
        team: "X-Men"
    },
    {
        realName: "Piotr Rasputin",
        alias: "Colossus",
        team: "X-Men"
    },
    {
        realName: "Matt Murdock",
        alias: "Daredevil",
        team: "Defenders"
    },
    {
        realName: "Danny Rand",
        alias: "Iron Fist",
        team: "Defender"
    }
];

db.Hero
    .remove({})
    .then(() => db.Hero.collection.insertMany(heroSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });