import React, { Component } from "react";

//components
import DeleteData from "../../components/utils/DeleteData/DeleteData";

class Painel extends Component {
    constructor(props) {
        super(props);

        this.deleteDataComponent = React.createRef();
    }

    handleDeleteData = () => {
        this.deleteDataComponent.current.deleteData(this.props.collection, this.props.dataId);
    }

    render() {
        return (
            <>
            <div className="panel panel-default text-center" id={this.props.dataId}>
                <div className="row">
                    <div className="col-sm-2">
                        <DeleteData ref={this.deleteDataComponent} collection={this.props.collection} dataId={this.props.dataId} />
                        <span className="remove" id="remove" onClick={this.handleDeleteData}>x</span>
                    </div>
                </div>
                <div className="panel-heading">
                    <h2 className="title">{this.props.title}</h2>
                </div>
                <div className="panel-body">
                    <p
                        className="content"
                        dangerouslySetInnerHTML={{ __html: this.props.content }}
                    />
                </div>
                <div className="panel-footer">
                    <h3 className="subtitle">{this.props.subtitle}</h3>
                </div>
            </div>
            </>
        )
    }
}
export default Painel;
