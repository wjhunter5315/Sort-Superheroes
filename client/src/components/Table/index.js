import React from "react";
import { Link } from "react-router-dom";
// import { DeleteBtn } from "../Buttons";
// import API from "../../utils/API";

// function deleteHero(_id) {
//     API.deleteHero(_id)
//         .then(res => loadHeroes())
//         .catch(err => console.log(err));
// };

export function HeroTable({ children }) {
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Real Name</th>
                    <th scope="col">Alias</th>
                    <th scope="col">Team</th>
                    <th scope="col">Info Page</th>
                </tr>
            </thead>
            <tbody>
                {children}
                
            </tbody>
        </table>
    );
};

export function TableItem(props) {
    
    return (
        <tr className="heroTableItem">
            <td key="heroId">{props._id}</td>
            <td id="heroName">{props.realName}</td>
            <td id="heroAlias">{props.alias}</td>
            <td id="heroTeam">{props.team}</td>
            <td type="button" className="btn btn-info">
                <Link to={"/heroes/" + props._id}>
                    View
                </Link>
            </td>
        </tr>
    );
};

export function Container({ children }) {
    return (
      <div className="list-overflow-container">
        <ul className="list-group">{children}</ul>
      </div>
    );
};
  
export function Item({ children }) {
    return <li className="list-group-item">{children}</li>;
};