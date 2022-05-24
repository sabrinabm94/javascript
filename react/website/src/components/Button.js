import React from "react";

const Button = props => {
    let button = null;
    if(props.disabled === false) {
        button = <button className={`btn ${props.className}`} type={props.type}>{props.text}</button>;
    } else {
        button = <button className={`btn ${props.className}`} disabled type={props.type}>{props.text}</button>;
    }
    return button;
}
export default Button;