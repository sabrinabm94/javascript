import { React, Component } from "react";

import { db, databaseRef, get } from "../init-firebase";

//components
import Thumbnail from "../components/Thumbnail";
import Carousel from "../components/Carousel";

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            render: <h1>Sem dados encontrados</h1>,
            thumbnailElements: [],
            carouselElements: [],
        };

        this.getData("thumbnailElements");
        this.getData("carouselElements");
    }

    getData(collection) {
        const dbRef = databaseRef(db);

        try {
            get(dbRef, collection).then((response) => {
                if (response.exists()) {
                    let elements = response.val()[collection];
                    let elementsArray = [];

                    if(typeof(elements) === "object") { //loop para objeto
                        elementsArray = Object.keys(elements).map((k) => elements[k])

                    } else {
                        elements.forEach((element) => { //loop para array
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

                    //pensar em como melhorar isso
                    if(collection === "thumbnailElements") {
                        this.setState({
                            thumbnailElements: elementsArray
                        });
                    }

                    if(collection === "carouselElements") {
                        this.setState({
                            carouselElements: elementsArray
                        });
                    }
                } else {
                    console.log("No data available");
                }
            });
        } catch (error) {
            console.log(error);
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
                        {this.state.thumbnailElements.map((data, id) => {
                            return (
                                <div className="col-sm-4">
                                    <Thumbnail
                                        imgSrc={data.image}
                                        title={data.title}
                                        subtitle={data.subtitle}
                                        key={id}
                                    />
                                </div>
                            );
                        })}
                    </>
                </div>
                <br />
                <h2>What our customers say</h2>
                <div className="row text-center slideanim slide">
                    <Carousel elements={this.state.carouselElements} />
                </div>
            </section>
        );
    }
}

export default Portfolio;