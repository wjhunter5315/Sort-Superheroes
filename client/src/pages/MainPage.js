import React, { useState, useEffect } from "react";
import Table, { Container, Item } from "../components/Table";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

function MainPage() {
    const [heroes, setHeroes] = useState([]);
    const [formObject, setFormObject] = useState([]);

    useEffect(() =>{
        loadHeroes()
    }, []);

    function loadHeroes() {
        API.getHeroes()
            .then(res => 
                setHeroes(res.data))
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
        <div>
            {heroes.lenght ? (
            <Container>
                {heroes.map(hero => (
                    <Item>
                        {hero.realName}
                    </Item>
                ))}
            </Container>
            ) : (
                <h3>No Heroes to Show</h3>
            )}
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
    )
};

export default MainPage;