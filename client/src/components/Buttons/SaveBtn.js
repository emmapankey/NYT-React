import React from "react";

export const SaveBtn = props =>
    <div className="btnDiv">
        <a className="waves-effect waves-light btn red">
            <i className="material-icons left">save{props.children}</i>
            Save
        </a>
    </div>

// export const SubmitBtn = props =>
// <div className="btnDiv">
//     <a {...props} className="waves-effect waves-light btn">
//         <i className="material-icons left">search</i>
//         Search
//         {props.children}
//     </a>
// </div>

export default SaveBtn;