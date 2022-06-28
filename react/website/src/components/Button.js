import React from "react";

const Button = (props) => {
    if (!props.disabled || props.disabled === false) {
        return (
            <button
                className={`btn ${props.className}`}
                type={props.type}
                data-toggle={props.dataToggle}
                data-target={props.dataTarget}
            >
                {props.text}
                {props.children}
            </button>
        );
    } else {
        return (
            <button
                className={`btn ${props.className}`}
                disabled
                type={props.type}
                data-toggle={props.dataToggle}
                data-target={props.dataTarget}
            >
                {props.text}
                {props.children}
            </button>
        );
    }
};
export default Button;
