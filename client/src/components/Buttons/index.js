import React from "react";

export function DeleteBtn(props) {
    return (
        <span type="button" className="delete-btn" {...props} role="button" tabIndex="0">
            X
        </span>
    );
};

export function SortBtn() {
    return (
        <button type="button" class="btn btn-primary">
            Sort
        </button>
    );
};