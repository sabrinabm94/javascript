import React from "react";
import Button from "./Button";

const PainelSecondary = (props) => {
    return (
        <div className="panel panel-default text-center">
            <div className="panel-heading">
                <h2 className="title">{props.title}</h2>
            </div>
            <div className="panel-body">
                <p
                    className="content"
                    dangerouslySetInnerHTML={{ __html: props.description }}
                ></p>
            </div>
            <div className="panel-footer">
                <h3 className="subtitle">{props.value}</h3>
                <a className="link" href={props.link}>
                    <Button
                        text="Sign Up"
                        className="btn"
                        type="submit"
                        disabled={true}
                    />
                </a>
            </div>
        </div>
    );
};
export default PainelSecondary;
