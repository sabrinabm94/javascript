import { React, Component } from "react";
import { db, databaseRef, get } from "../../init-firebase";

//components
import Painel from "../../components/Painel";

class ClientsContact extends Component {
    constructor() {
        super();

        this.state = {
            render: <h1>Sem dados encontrados</h1>,
            clientsContactElements: [],
        };
    }

    componentDidMount() {
        this.getData("clientsContactElements");
    }

    getData(collection) {
        const dbRef = databaseRef(db);

        try {
            get(dbRef, collection).then((response) => {
                if (response.exists()) {
                    let elements = response.val()[collection];
                    let elementsArray = [];

                    if (typeof elements === "object") {
                        //loop para objeto
                        elementsArray = Object.keys(elements).map(
                            (key) => elements[key].form
                        );
                    } else {
                        elements.forEach((element) => {
                            //loop para array
                            if (
                                elementsArray.some(
                                    (item) => item.number === element.number
                                ) === false ||
                                elementsArray.some(
                                    (item) => item.id === element.id
                                ) === false
                            ) {
                                elementsArray.push(element.form);
                            }
                        });
                    }

                    console.log("Got data ");

                    if (collection === "clientsContactElements") {
                        this.setState({
                            clientsContactElements: elementsArray,
                        });
                    }
                } else {
                    console.log("No data available");
                }
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    fixBreaklines(text) {
        if (text) {
            return text.replace(/\n\r?/g, "<br />");
        }
    }

    render() {
        return (
            <section id="contact" className="container-fluid bg-grey">
                <h2 className="text-center">CLIENTS CONTACT</h2>
                <div className="row">
                    <>
                        {this.state.clientsContactElements.map((data, key) => {
                            return (
                                <div className="col-sm-4">
                                    <Painel
                                        title={data.name}
                                        subtitle={data.email}
                                        content={data.comment}
                                        key={key}
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
