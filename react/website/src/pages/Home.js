import React from 'react';

//templates
import Search from '../templates/Search';
import About from '../templates/About';
import Values from '../templates/Values';
import Service from '../templates/Service';
import Portfolio from '../templates/Portfolio';
import Pricing from '../templates/Pricing';
import Contact from '../templates/Contact';
import Map from '../templates/Map';

const Home = props => {
    return (
        <div className='homepage'>
            <Search />
            <About />
            <Values />
            <Service />
            <Portfolio />
            <Pricing />
            <Contact />
            <Map />
        </div>
    );
}
export default Home;