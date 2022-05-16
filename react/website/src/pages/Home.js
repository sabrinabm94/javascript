import {
    Routes,
    Route,
} from "react-router-dom";

//templates
import Search from '../templates/Search';

//pages
import About from '../templates/About';
import Service from '../templates/Service';
import Portfolio from '../templates/Portfolio';
import Pricing from '../templates/Pricing';
import Contact from '../templates/Contact';
import Map from '../templates/Map';


const Home = props => {
    return (
        <div className='homepage'>
            <Search />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path='/services' element={<Service />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/map' element={<Map />} />
            </Routes>
        </div>
    );
}
export default Home;