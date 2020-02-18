import React, { useState, useEffect } from "react";
import { TableItem } from "../components/Table";
import API from "../utils/API";

function TestPage({ children }) {
    const [heroes, setHeroes] = useState([]);
    
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
    return (
        <div>
            {heroes.length ? (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Real Name</th>
                        <th scope="col">Alias</th>
                        <th scope="col">Team</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                {heroes.map(hero => (
                        <TableItem
                            realName={hero.realName}
                            alias={hero.alias}
                            team={hero.team} >
                        </TableItem>
                        
                    ))}
                </tbody>
            </table>
            ) : (
                <h3>No Heroes to Show</h3>
            )}
        </div>
    )
};

export default TestPage;