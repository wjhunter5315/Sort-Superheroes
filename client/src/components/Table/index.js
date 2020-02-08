import React from "react";

function Table(props) {
    return (
        <div className="table table-striped">
            <thread>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Real Name</th>
                    <th scope="col">Alias</th>
                    <th scope="col">Team</th>
                </tr>
            </thread>
            <tbody>
                <tr>
                    <th scope="row"> {props.id} </th>
                    <td> {props.realName} </td>
                    <td> {props.alias} </td>
                    <td> {props.team} </td>
                </tr>
            </tbody>
        </div>
    )
};
export default Table;

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