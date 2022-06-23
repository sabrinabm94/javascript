import { React, Component } from "react";

import {
    Routes,
    Route,
} from "react-router-dom";

//templates
import Header from "../../templates/admin/Header";

//pages
import Portfolio from "../admin/Portfolio";
import Costumers from "../admin/Costumers";

class Admin extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="admin">
                <h1>Admin area</h1>
                <Header />
                <Routes>
                    <Route path="portfolio" element={<Portfolio />} />
                </Routes>
                <Routes>
                    <Route path="costumers" element={<Costumers />} />
                </Routes>
            </div>
        )
    };
}

export default Admin;
