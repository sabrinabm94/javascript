import { React, Component } from "react";
import { Routes, Route } from "react-router-dom";
import { auth, onAuthStateChanged } from "../../init-firebase";

//templates
import Header from "../../templates/admin/Header";

//page
import Company from "../admin/Company";
import About from "../admin/About";
import Services from "../admin/Services";
import Portfolio from "../admin/Portfolio";
import Costumers from "../admin/Costumers";
import Pricing from "../admin/Pricing";
import Contact from "../admin/Contact";
import ClientsContact from "../admin/ClientsContact";

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            user: null
        }
    }

    componentDidMount() {
        console.log("oi");
        this.verifyUserAuth("/login"); //se não está autenticado, será redirecionado para login
    }

    verifyUserAuth(link) {
        onAuthStateChanged(auth, (user) => {
            if (user && user !== null && user !== undefined) {
                this.setState({
                    isAuthenticated: true,
                    user: user
                })
            } else {
                this.setState({
                    isAuthenticated: false,
                    user: null
                })
                return window.location.href = link;
            }
        });
    }

    render() {
        return (
            <div className="admin" id="admin">
                <h1 className="title">Admin area</h1>
                <Header />
                <Routes>
                    <Route path="company" element={<Company />} />
                </Routes>
                <Routes>
                    <Route path="about" element={<About />} />
                </Routes>
                <Routes>
                    <Route path="services" element={<Services />} />
                </Routes>
                <Routes>
                    <Route path="portfolio" element={<Portfolio />} />
                </Routes>
                <Routes>
                    <Route path="costumers" element={<Costumers />} />
                </Routes>
                <Routes>
                    <Route path="pricing" element={<Pricing />} />
                </Routes>
                <Routes>
                    <Route path="contact" element={<Contact />} />
                </Routes>
                <Routes>
                    <Route path="clientsContact" element={<ClientsContact />} />
                </Routes>
            </div>
        );
    }
}

export default Admin;
