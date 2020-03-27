import React from "react";
const heroes = [
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
        team: "Defenders"
    }
];

function RawPage() {
    let avengersHeros = heroes.filter(function(hero) {
        return hero.team == "Avengers";
    });
    console.log(avengersHeros);
    //returns array of objects containing Avengers team members
    var i;
    for (i = 0; i < avengersHeros.length; i++) {
        console.log(avengersHeros[i].realName)
    }
    //returns individual Avengers real names

    let xmenHeroes = heroes.filter(function(hero) {
        return hero.team == "X-Men";
    });
    console.log(xmenHeroes);
    var i;
    for (i = 0; i < xmenHeroes.length; i++) {
        console.log(xmenHeroes[i].realName)
    }

    let defendersHeroes = heroes.filter(function(hero) {
        return hero.team == "Defenders";
    });
    console.log(defendersHeroes);
    var i;
    for (i = 0; i < defendersHeroes.length; i++) {
        console.log(defendersHeroes[i].realName)
    }

    return (
        <div>
            <ul className='list-group'>
            
            </ul>
        </div>
    );
}

export default RawPage;