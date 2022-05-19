import React, { Component } from 'react';

import Firebase from '../firebaseconfig';

//components
import Thumbnail from '../components/Thumbnail';
import Carousel from '../components/Carousel';

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const thumbnailElements = [
            {
                number: 0,
                title: 'Paris',
                subtitle: 'Yes, we built Paris',
                image: 'https://www.w3schools.com/bootstrap/paris.jpg'

            },
            {
                number: 1,
                title: 'New Work',
                subtitle: 'We built New York',
                image: 'https://www.w3schools.com/bootstrap/newyork.jpg'
            },
            {
                number: 2,
                title: 'San Francisco',
                subtitle: 'Yes, San Fran is ours',
                image: 'https://www.w3schools.com/bootstrap/sanfran.jpg'
            },
        ];

        const carouselElements = [
            {
                number: 0,
                title: 'This company is the best. I am so happy with the result!',
                subtitle: 'Michael Roe, Vice President, Comment Box',
                image: 'https://www.w3schools.com/bootstrap/paris.jpg'

            },
            {
                number: 1,
                title: 'One word... WOW!!',
                subtitle: 'John Doe, Salesman, Rep Inc',
                image: 'https://www.w3schools.com/bootstrap/newyork.jpg'
            },
            {
                number: 2,
                title: 'Could I... BE any more happy with this company?',
                subtitle: 'Chandler Bing, Actor, FriendsAlot',
                image: 'https://www.w3schools.com/bootstrap/sanfran.jpg'
            },
        ];

        return (
            <section id='portfolio' className='container-fluid text-center bg-grey'>
                <h2>Portfolio</h2><br />
                <h4>What we have created</h4>
                <div className='row text-center slideanim slide'>
                    <>
                        {thumbnailElements.map((data, id) => {
                            return (
                                <div className='col-sm-4' key={id}>
                                    <Thumbnail imgSrc={data.image} title={data.title} subtitle={data.subtitle} />
                                </div>
                            );
                        })}
                    </>
                </div>
                <br />
                <h2>What our customers say</h2>
                <div className='row text-center slideanim slide'>
                    <Carousel elements={carouselElements} />
                </div>
            </section>
        );
    }

}
export default Portfolio;