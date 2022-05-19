import React from 'react';

const Thumbnail = props => {
    return (
        <div className='thumbnail'>
            <img src={props.imgSrc} alt={`Image of ${props.title}`} width='400' height='300' />
            <h2>
                <strong>{props.title}</strong>
            </h2>
            <h3>{props.subtitle}</h3>
        </div>
    );
}
export default Thumbnail;