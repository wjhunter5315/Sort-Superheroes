import React, { useState, useEffect } from "react";
import API from "../utils/API";

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

    //returns array of objects containing Avengers team members
    let avengersHeroes = heroes.filter(function(hero) {
        return hero.team === "Avengers";
    });
    console.log(avengersHeroes);
    
    //returns individual Avengers real names
    var i;
    for (i = 0; i < avengersHeroes.length; i++) {
        console.log(avengersHeroes[i].realName)
    };

    let xmenHeroes = heroes.filter(function(hero) {
        return hero.team === "X-Men";
    });
    console.log(xmenHeroes);
    var j;
    for (j = 0; j < xmenHeroes.length; j++) {
        console.log(xmenHeroes[j].realName)
    };

    let defendersHeroes = heroes.filter(function(hero) {
        return hero.team === "Defenders";
    });
    console.log(defendersHeroes);
    var k;
    for (k = 0; k < defendersHeroes.length; k++) {
        console.log(defendersHeroes[k].realName)
    };

    const [avengersState, setAvengersState] = useState(avengersHeroes);
    function filterAvengers(e) {
        e.preventDefault();
        setAvengersState(avengersHeroes);
        console.log(avengersState);
    };

    const [xmenState, setXmenState] = useState(xmenHeroes);
    function filterXmen(e) {
        e.preventDefault();
        setXmenState(xmenHeroes);
        console.log(xmenState);
    };

    const [defendersState, setDefendersState] = useState(defendersHeroes);
    function filterDefenders(e) {
        e.preventDefault();
        setDefendersState(defendersHeroes);
        console.log(defendersState)
    }

    return (
        <div>
            <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={filterAvengers}>
                    Avengers
            </button>
            <button 
                type="button" 
                className="btn btn-outline-warning"
                onClick={filterXmen}>
                    X-Men
            </button>
            <button 
                type="button" 
                className="btn btn-outline-success"
                onClick={filterDefenders}>
                    Defenders
            </button>
        </div>
    );
}

export default RawPage;