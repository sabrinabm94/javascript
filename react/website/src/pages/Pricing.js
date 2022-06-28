import { React, Component } from "react";
import { db, databaseRef, get } from "../init-firebase";

//components
import PainelSecondary from "../components/PainelSecondary";

class Pricing extends Component {
    constructor() {
        super();

        this.state = {
            render: <h1>Sem dados encontrados</h1>,
            pricingElements: [],
        };
    }

    componentDidMount() {
        this.getData("pricingElements");
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

                    if (collection === "pricingElements") {
                        this.setState({
                            pricingElements: elementsArray,
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
            <section id="pricing" className="container-fluid">
                <div className="text-center">
                    <h1 className="title">Pricing</h1>
                </div>
                <div className="row slideanim slide">
                    <>
                        {this.state.pricingElements.map((data, key) => {
                            data = data.form;
                            data.content = this.fixBreaklines(data.content);
                            return (
                                <div className="col-sm-4 col-xs-12" key={key}>
                                    <PainelSecondary
                                        title={data.title}
                                        description={data.content}
                                        value={data.subtitle}
                                        link={data.link}
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

export default Pricing;
