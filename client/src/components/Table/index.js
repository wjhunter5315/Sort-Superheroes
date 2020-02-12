import React from "react";

export function HeroTable({ children }) {
    return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    
                    <th scope="col">Real Name</th>
                    <th scope="col">Alias</th>
                    <th scope="col">Team</th>
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
        <tr>
            <td>{props.realName}</td>
            <td>{props.alias}</td>
            <td>{props.team}</td>
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