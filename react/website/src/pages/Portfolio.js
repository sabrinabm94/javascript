import { React, Component } from "react";
import { db, databaseRef, get } from "../init-firebase";

//components
import Thumbnail from "../components/Thumbnail";

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            render: <h1>Sem dados encontrados</h1>,
            thumbnailElements: [],
        };
    }

    componentDidMount() {
        this.getData("thumbnailElements");
    }

    getData(collection) {
        const dbRef = databaseRef(db);

        try {
            get(dbRef, collection).then((response) => {
                if(response.exists()) {
                    let elements = response.val()[collection];
                    let elementsArray = [];

                    if(typeof(elements) === "object") { //loop para objeto
                        elementsArray = Object.keys(elements).map((key, id) => elements[key])

                    } else {
                        elements.forEach((element) => { //loop para array
                            if(
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

                    if(collection === "thumbnailElements") {
                        this.setState({
                            thumbnailElements: elementsArray
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
            <section id="portfolio" className="container-fluid text-center bg-grey">
                <h2>Portfolio</h2>
                <br />
                <h4>What we have created</h4>
                <div className="row text-center slideanim slide">
                    <>
                        {this.state.thumbnailElements.map((data, key) => {
                            return (
                                <div className="col-sm-4" key={key}>
                                    <Thumbnail
                                        imgSrc={data.image}
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