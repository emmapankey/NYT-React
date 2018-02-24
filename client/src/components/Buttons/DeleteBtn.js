import React from "react";

export const DeleteBtn = props =>
    <a className="btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons">delete_forever {props.children}</i>
    </a>


export default DeleteBtn;