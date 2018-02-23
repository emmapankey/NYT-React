import React from "react";

export const Card = ({ children }) =>
    <div className="teal lighten-2">
        <div className="card-content white-text">
            {children}
            {/* <p>Placeholder text</p> */}
        </div>
        <div className="card-action">
        </div>
    </div>