import React from "react";
import "./Buttons.css";

export const SubmitBtn = props =>
    <div className="btnDiv">
        <a {...props} className="waves-effect waves-light btn">
            <i className="material-icons left">search</i>
            Search
            {props.children}
        </a>
    </div>

export default SubmitBtn;