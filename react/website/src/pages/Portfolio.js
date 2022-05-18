import React from 'react';
import Thumbnail from '../components/Thumbnail';
import Carousel from '../components/Carousel';

const Portfolio = props => {
    const carouselElements = [
        {
            number: 0,
            title: 'This company is the best. I am so happy with the result!',
            subtitle: 'Michael Roe, Vice President, Comment Box'

        },
        {
            number: 1,
            title: 'One word... WOW!!',
            subtitle: 'John Doe, Salesman, Rep Inc'

        },
        {
            number: 2,
            title: 'Could I... BE any more happy with this company?',
            subtitle: 'Chandler Bing, Actor, FriendsAlot'

        },
    ];
    return (
        <section id='portfolio' className='container-fluid text-center bg-grey'>
            <h2>Portfolio</h2><br />
            <h4>What we have created</h4>
            <div className='row text-center slideanim slide'>
                <div className='col-sm-4'>
                    <Thumbnail imgSrc='https://www.w3schools.com/bootstrap/paris.jpg' title='Paris' subtitle='Yes, we built Paris' />
                </div>
                <div className='col-sm-4'>
                    <Thumbnail imgSrc='https://www.w3schools.com/bootstrap/newyork.jpg' title='New York' subtitle='We built New York' />
                </div>
                <div className='col-sm-4'>
                    <Thumbnail imgSrc='https://www.w3schools.com/bootstrap/sanfran.jpg' title='San Francisco' subtitle='Yes, San Fran is ours' />
                </div>
            </div>
            <br />
            <h2>What our customers say</h2>
            <div className='row text-center slideanim slide'>
                <Carousel elements={carouselElements} />
            </div>
        </section>
    );
}
export default Portfolio;