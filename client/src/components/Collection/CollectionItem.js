import React from "react";
import "./Collection.css";

export const CollectionItem = props =>
<li className="collection-item">
  {props.children}
</li>;