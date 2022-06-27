import React from "react";

const Painel = props => {
    return (
        <div className="panel panel-default text-center">
            <div className="panel-heading">
                <h2>{props.title}</h2>
            </div>
            <div className="panel-body">
                <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
            </div>
            <div className="panel-footer">
                <h3>{props.subtitle}</h3>
            </div>
        </div>
    );
};
export default Painel;