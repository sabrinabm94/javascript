import React, { Component } from "react";

//components
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import GetData from "../../components/utils/GetData/GetData";
import DeleteData from "../../components/utils/DeleteData";

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: [],
        };

        this.deleteDataComponent = React.createRef();
    }

    handleGetData = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            this.setState({ elements: data });
        }
    };

    handleDeleteData = () => {
        this.deleteDataComponent.current.deleteData(null, null);
    };

    render() {
        return (
            <div
                id="admin-show-data"
                className="container-fluid text-center bg-grey"
            >
                <section className="section show-data">
                    <h2 className="subtitle">Delete</h2>
                    <GetData
                        collection={this.props.collection}
                        parentCallback={(data) => {
                            this.handleGetData(data);
                        }}
                    />
                    <Dropdown
                        className="show-data-dropdown"
                        id="show-data-dropdown"
                        buttonText="Register list"
                    >
                        <>
                            {this.state.elements !== null &&
                                this.state.elements !== undefined &&
                                this.state.elements.length > 0 &&
                                this.state.elements.map((data, key) => {
                                    return (
                                        <li
                                            className="dropdown-item"
                                            key={key}
                                            id={data.id}
                                        >
                                            <p>
                                                {
                                                    data[
                                                        this.props
                                                            .registerTitleInList
                                                    ]
                                                }
                                            </p>
                                            <Button
                                                className="btn-danger"
                                                id="remove"
                                                onClick={this.handleDeleteData}
                                            >
                                                x
                                                <DeleteData
                                                    ref={
                                                        this.deleteDataComponent
                                                    }
                                                    collection={
                                                        this.props.collection
                                                    }
                                                    dataId={data.id}
                                                />
                                            </Button>
                                        </li>
                                    );
                                })}
                        </>
                    </Dropdown>
                </section>
            </div>
        );
    }
}
export default About;
