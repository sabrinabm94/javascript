import { React } from "react";

import { Routes, Route } from "react-router-dom";

//templates
import PageHeader from "../templates/PageHeader";

//pages
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Costumers from "./Costumers";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Admin from "./admin/Admin";

const Pages = (props) => {
    return (
        <div className="pages">
            <PageHeader />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/costumers" element={<Costumers />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/*" element={<Admin />} />
            </Routes>
        </div>
    );
};
export default Pages;
