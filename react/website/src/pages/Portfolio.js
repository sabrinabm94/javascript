import { React, Component } from "react";

import { db, ref, get } from "../init-firebase";

//components
import Thumbnail from "../components/Thumbnail";
import Carousel from "../components/Carousel";

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            render: <h1>Sem dados encontrados</h1>,
            carouselElements: [],
            thumbnailElements: []
        };

        this.getData("thumbnailElements", this.state.thumbnailElements);
        this.getData("carouselElements", this.state.carouselElements);
    }

    async getData(collection, state) {
        const dbRef = ref(db);

        try {
            await get(dbRef, collection).then((snapshot) => {
                if (snapshot.exists()) {
                    let elements = snapshot.val()[collection];
                    elements.forEach(element => {
                        if (state.some(item => item.number === element.number) == false || state.some(item => item.id === element.id) == false) {
                            state.push(element);
                        }
                    });
                    console.log("Got data ", state);

                    this.state.render = <section id="portfolio" className="container-fluid text-center bg-grey">
                        <h2>Portfolio</h2><br />
                        <h4>What we have created</h4>
                        <div className="row text-center slideanim slide">
                            <>
                                {
                                    this.state.thumbnailElements && this.state.thumbnailElements.length > 0 && this.state.thumbnailElements.map(
                                        (data) => {
                                            <div className="col-sm-4">
                                                <Thumbnail imgSrc={data.image} title={data.title} subtitle={data.subtitle} />
                                            </div>
                                        }
                                    )
                                }
                            </>
                        </div>
                        <br />
                        <h2>What our customers say</h2>
                        <div className="row text-center slideanim slide">
                            <Carousel elements={this.state.carouselElements} />
                        </div>
                    </section>
                } else {
                    console.log("No data available");
                }
            }
            );
        }
        catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            this.state.render
        );
    }

}

export default Portfolio;