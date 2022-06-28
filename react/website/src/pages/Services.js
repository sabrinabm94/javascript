import { React, Component } from "react";
import { db, databaseRef, get } from "../init-firebase";

//components
import Glyphicon from "../components/Glyphicon";
import Card from "../components/Card";

class Services extends Component {
    constructor() {
        super();

        this.state = {
            render: <h1>Sem dados encontrados</h1>,
            servicesElements: [],
        };
    }

    componentDidMount() {
        this.getData("servicesElements");
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
                            (key, id) => elements[key]
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
                                elementsArray.push(element);
                            }
                        });
                    }

                    console.log("Got data ");

                    if (collection === "servicesElements") {
                        this.setState({
                            servicesElements: elementsArray,
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

    render() {
        return (
            <section id="services" className="container-fluid text-center">
                <h1 className="title">SERVICES</h1>
                <h2 className="subtitle">What we offer</h2>
                <div className="row slideanim slide">
                    <>
                        {this.state.servicesElements.map((data, key) => {
                            data = data.form;
                            return (
                                <div className="col-sm-4" key={key}>
                                    <Card
                                        iconName={`glyphicon-${data.icon} logo-small`}
                                        title={data.title}
                                        subtitle={data.subtitle}
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

export default Services;
