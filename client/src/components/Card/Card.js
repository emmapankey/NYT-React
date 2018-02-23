import React from "react";
import "./Card.css";

export const Card = ({ children }) =>
    <div className="teal lighten-2">
        <div className="card-content white-text">
            {children}
        </div>
        <div className="card-action">
        </div>
    </div>