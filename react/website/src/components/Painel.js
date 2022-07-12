import React, { Component } from "react";

//components
import DeleteData from "../components/utils/DeleteData";

class Painel extends Component {
    render() {
        return (
            <div className="panel panel-default text-center" id={this.props.dataId}>
                <div className="row">
                    <div className="col-sm-2">
                        <DeleteData className={this.props.deleteClassname} button={this.props.deleteButtonName} collection={this.props.collection} />
                    </div>
                </div>
                <div className="panel-heading">
                    <h2 className="title">{this.props.title}</h2>
                </div>
                <div className="panel-body">
                    <p
                        className="content"
                        dangerouslySetInnerHTML={{ __html: this.props.content }}
                    ></p>
                </div>
                <div className="panel-footer">
                    <h3 className="subtitle">{this.props.subtitle}</h3>
                </div>
            </div>
        )
    }
}
export default Painel;
