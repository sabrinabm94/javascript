import React from "react";

const Thumbnail = (props) => {
    let style = {
        backgroundImage: `url(${props.url})`,
    };

    return (
        <div className="thumbnail">
            <picture
                className="picture"
                alt={`Image of ${props.title}`}
                style={style}
            ></picture>
            <h2 className="title">
                <strong>{props.title}</strong>
            </h2>
            <h3 className="subtitle">{props.subtitle}</h3>
        </div>
    );
};
export default Thumbnail;
