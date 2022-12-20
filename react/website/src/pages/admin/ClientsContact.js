import { React, Component } from "react";

//components
import Painel from "../../components/Painel";
import GetData from "../../components/utils/GetData";

class ClientsContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: [],
        };
    }

    handleGetData = (childData) => {
        if (
            childData &&
            childData !== null &&
            childData !== undefined &&
            childData !== ""
        ) {
            this.setState({ elements: childData });
        }
    };

    render() {
        return (
            <section
                id="clients-contact"
                className="clients-contact container-fluid bg-grey"
            >
                <GetData
                    collection="clientsContactElements"
                    parentCallback={(data) => {
                        this.handleGetData(data);
                    }}
                />
                <h2 className="text-center">CLIENTS CONTACT</h2>
                <div className="row">
                    <>
                        {this.state.elements.map((data, key) => {
                            return (
                                <div className="col-sm-4" key={key}>
                                    <Painel
                                        collection="clientsContactElements"
                                        dataId={data.id}
                                        title={data.name}
                                        subtitle={data.email}
                                        content={data.comment}
                                    />
                                </div>
                            );
                        })}
                    </>
                </div>
            </section>
        );
    }
}

export default ClientsContact;
