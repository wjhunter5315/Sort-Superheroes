import React from "react";
import { DeleteBtn } from "../Buttons";

export function HeroTable({ children }) {
    return (
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
                {children}
                
            </tbody>
        </table>
    );
};

export function TableItem(props) {
    
    return (
        <tr className="heroTableItem">
            <td id="heroName">{props.realName}</td>
            <td id="heroAlias">{props.alias}</td>
            <td id="heroTeam">{props.team}</td>
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