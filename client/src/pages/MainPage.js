import React, { useState, useEffect } from "react";
import { HeroTable, TableItem } from "../components/Table";
import { Input, FormBtn } from "../components/Form";
// import { DeleteBtn } from "../components/Buttons";
import API from "../utils/API";
// import { Link, useParams } from "react-router-dom";

function MainPage() {
    const [heroes, setHeroes] = useState([]);
    const [formObject, setFormObject] = useState([]);
    
    
    useEffect(() =>{
        loadHeroes()
    }, [])

    function loadHeroes() {
        API.getHeroes()
            .then(res => 
                setHeroes(res.data)
            )
            .catch(err => console.log(err));
    };

    // function deleteHero(id) {
    //     API.deleteHero(id)
    //         .then(res => loadHeroes())
    //         .catch(err => console.log(err));
    // };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.realName && formObject.alias && formObject.team) {
            API.saveHero({
                realName: formObject.realName,
                alias: formObject.alias,
                team: formObject.team
            })
            .then(res => loadHeroes())
            .catch(err => console.log(err));
            alert("Hero Added");
            window.location.reload();
        }
    };

//get all heroes and list their alias in the console
    var i;
    var allHeroList = "";
    var allHeroesKeys = "";

    function allHeroes() {
        const teamAll = heroes.filter(function(hero) {
            return hero.team === "Avengers" || "Defenders" || "Fantastic Four" || "X-Men";
        });
        for (i = 0; i < teamAll.length; i++) {
            allHeroList += teamAll[i].alias + ", ";
        };
        console.log(allHeroList);
        for (i = 0; i < teamAll.length; i++) {
            allHeroesKeys += teamAll[i]._id + ", ";
        };
        console.log(allHeroesKeys);
    };
    allHeroes();

//get only Avengers heroes and list their alias in the console
    var avengersHeroList = "";
    function avengersHeroes() {
        const teamAvengers = heroes.filter((hero) => {
            return hero.team === "Avengers";
        });
        for (i = 0; i < teamAvengers.length; i++) {
            avengersHeroList += teamAvengers[i].alias + ", ";
        };
        console.log(avengersHeroList);
    };

//get only X-men
    var xmenHeroList = "";
    function xmenHeroes() {
        const teamXmen = heroes.filter((hero) => {
            return hero.team === "X-Men";
        });
        for (i = 0; i < teamXmen.length; i++) {
            xmenHeroList += teamXmen[i].alias + ", ";
        };
        console.log(xmenHeroList);
    };

//get only Fantastic Four
    var fantasticFourHeroList = "";
    function fantasticFourHeroes() {
        const teamFantasticFour = heroes.filter((hero) => {
            return hero.team === "Fantastic Four";
        });
        for (i = 0; i < teamFantasticFour.length; i++) {
            fantasticFourHeroList += teamFantasticFour[i].alias + ", ";
        };
        console.log(fantasticFourHeroList);
    };

//get only Defenders
    var defendersHeroList = "";
    function defendersHeroes() {
        const teamDefenders = heroes.filter((hero) => {
            return hero.team === "Defenders";
        });
        for (i = 0; i < teamDefenders.length; i++) {
            defendersHeroList += teamDefenders[i].alias + ", ";
        };
        console.log(defendersHeroList);
    };

    return (
        <div className="row">
        <div className="col-md-8">
            {heroes.length ? (
                <HeroTable>
                    {heroes.map((hero) => (
                        <TableItem
                            key={hero._id}
                            _id={hero._id}
                            realName={hero.realName}
                            alias={hero.alias}
                            team={hero.team}>
                        </TableItem>
                    ))}
                </HeroTable>
            ) : (
                <h3>No Heroes to Show</h3>
            )}
            
        </div>
        <div className="col-md-4">
            <form>
            <Input
                onChange={handleInputChange}
                name="realName"
                placeholder="Real Name (required)"
            />
            <Input
                onChange={handleInputChange}
                name="alias"
                placeholder="Alias (required)"
            />
            <Input
                onChange={handleInputChange}
                name="team"
                placeholder="Team (required)"
            />
            <FormBtn
                disabled={!(formObject.realName && formObject.alias && formObject.team)}
                onClick={handleFormSubmit}
            >
                Add Hero
            </FormBtn>
            </form>
            <br></br>
            <div>
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={avengersHeroes}>
                    Avengers
            </button>
            <button 
                type="button" 
                className="btn btn-warning"
                onClick={xmenHeroes}>
                    X-Men
            </button>
            <button 
                type="button" 
                className="btn btn-success"
                onClick={fantasticFourHeroes}>
                    Fantastic Four
            </button>
            <button 
                type="button" 
                className="btn btn-danger"
                onClick={defendersHeroes}>
                    Defenders
            </button>
        </div>
        </div>
        
        </div>
    )
};

export default MainPage;

//CAN BE USED TO SHOW LIST OF HEROES RATHER THAN TABLE
// {heroes.length ? (
//     <Container>
//         {heroes.map(hero => (
//             <Item key={hero._id}>
//                 {hero.realName} | {hero.alias} | {hero.team}
//             </Item>
//         ))}
//     </Container>
//     ) : (
//         <h3>No Heroes to Show</h3>
// )}