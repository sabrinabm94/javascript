import React from "react";

const Thumbnail = props => {
    let style = {
        backgroundImage: `url(${props.url})`
    }

    return (
        <div className="thumbnail">
            <picture className="image" alt={`Image of ${props.title}`} style={style}></picture>
            <h2>
                <strong>{props.title}</strong>
            </h2>
            <h3>{props.subtitle}</h3>
        </div>
    );
};
export default Thumbnail;