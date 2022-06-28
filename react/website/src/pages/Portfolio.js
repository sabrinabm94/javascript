import { React, Component } from "react";
import { db, databaseRef, get } from "../init-firebase";

//components
import Thumbnail from "../components/Thumbnail";

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            render: <h1>Sem dados encontrados</h1>,
            portfolioElements: [],
        };
    }

    componentDidMount() {
        this.getData("portfolioElements");
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

                    if (collection === "portfolioElements") {
                        this.setState({
                            portfolioElements: elementsArray,
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
            <section
                id="portfolio"
                className="container-fluid text-center bg-grey"
            >
                <h1 className="title">PORTFOLIO</h1>
                <h2 className="subtitle">What we have created</h2>
                <div className="row text-center slideanim slide">
                    <>
                        {this.state.portfolioElements.map((data, key) => {
                            return (
                                <div className="col-sm-4" key={key}>
                                    <Thumbnail
                                        url={data.file}
                                        title={data.title}
                                        subtitle={data.subtitle}
                                    />
                                </div>
                            );
                        })}
                    </>
                </div>
                <br />
            </section>
        );
    }
}

export default Portfolio;
