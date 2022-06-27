import { React, Component } from "react";
import { db, databaseRef, get } from "../init-firebase";

//components
import Carousel from "../components/Carousel";

class Portfolio extends Component {
    constructor() {
        super();

        this.state = { 
            render: <h1>Sem dados encontrados</h1>,
            carouselElements: [],
        };

    }

    componentDidMount() {
        this.getData("carouselElements");
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
            return error;
        }
    }

    render() {
        return (
            <section id="costumers" className="container-fluid text-center bg-grey">
                <h1 className="title">COSTUMERS</h1>
                <h2 className="subtitle">What our customers say</h2>
                <div className="row text-center slideanim slide">
                    <Carousel elements={this.state.carouselElements} />
                </div>
            </section>
        );
    }
}

export default Portfolio;