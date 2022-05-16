import {
    Routes,
    Route,
} from "react-router-dom";

//templates
import Search from '../templates/Search';

//pages
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio';
import Pricing from './Pricing';
import Contact from './Contact';

const Pages = props => {
    return (
        <div className='page'>
            <Search />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path='/services' element={<Service />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    );
}
export default Pages;