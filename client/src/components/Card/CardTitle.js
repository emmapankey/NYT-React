import React from "react";
import "./Card.css";

export const CardTitle = props =>
<h1 className="card-title">
  {props.children}
</h1>;