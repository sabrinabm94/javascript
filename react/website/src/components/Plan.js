import React from "react";
import Button from "../components/Button";

const Plan = props => {
    return (
        <div className="panel panel-default text-center">
            <div className="panel-heading">
                <h2>{props.title}</h2>
            </div>
            <div className="panel-body">
                <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
            </div>
            <div className="panel-footer">
                <h3>{props.value}</h3>
                <a href={props.link}>
                    <Button text="Sign Up" className="btn-lg" type="submit" disabled={true} />
                </a>
            </div>
        </div>
    );
};
export default Plan;