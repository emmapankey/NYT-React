import React from "react";

export const SaveBtn = props =>
    <a className="btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons">save{props.children}</i>
    </a>


export default SaveBtn;