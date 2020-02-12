import React, { useState, useEffect } from "react";
import { Container, Item, HeroTable, TableItem } from "../components/Table";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

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
        }
    };

    return (
        <div className="row">
        <div className="col-md-8">
            {heroes.length ? (
                <HeroTable>
                    {heroes.map(hero => (
                        <TableItem
                            realName={hero.realName}
                            alias={hero.alias}
                            team={hero.team}
                        />
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