import React from "react";

const Painel = (props) => {
    return (
        <div className="panel panel-default text-center">
            <div className="row">
                <div className="col-sm-2">
                    <span className="delete">x</span>
                </div>
            </div>
            <div className="panel-heading">
                <h2 className="title">{props.title}</h2>
            </div>
            <div className="panel-body">
                <p
                    className="content"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                ></p>
            </div>
            <div className="panel-footer">
                <h3 className="subtitle">{props.subtitle}</h3>
            </div>
        </div>
    );
};
export default Painel;
