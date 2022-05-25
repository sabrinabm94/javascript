import React from "react";
import Glyphicon from "../components/Glyphicon";

const Carousel = props => {
    return (
        <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
            <ol className="carousel-indicators">
                <>
                    {
                        props.elements.map(
                            (data) => {
                                let target = null;

                                if (data.number === 0) {
                                    target = <li data-target="#myCarousel" data-slide-to={data.number} className="active"></li>;
                                } else {
                                    target = <li data-target="#myCarousel" data-slide-to={data.number}></li>;
                                }

                                return target;
                            })
                    }
                </>
            </ol>
            <div className="carousel-inner" role="listbox">
                {
                    props.elements.map(
                        (data) => {
                            let item = null;

                            if (data.number === 0) {
                                item = <div className="item active">
                                    <h4>{data.title}</h4>
                                    <span>{data.subtitle}</span>
                                </div>;
                            } else {
                                item = <div className="item">
                                    <h4>{data.title}</h4>
                                    <span>{data.subtitle}</span>
                                </div>;
                            }
                            return item;
                        })
                }
            </div>
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <Glyphicon name="glyphicon-chevron-left" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <Glyphicon name="glyphicon-chevron-right" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};
export default Carousel;