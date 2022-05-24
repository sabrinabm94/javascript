import React from "react";
import Glyphicon from "../components/Glyphicon";

const Card = props => {
    return (
        <div className="card">
            <Glyphicon name={props.iconName} />
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
        </div>
    );
};
export default Card;