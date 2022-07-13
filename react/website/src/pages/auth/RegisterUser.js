import React, { Component } from "react";

//components
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import RegisterOrLoginUser from "../../components/RegisterOrLoginUser";
import AuthProtector from "../../components/utils/AuthProtector";

class RegisterUser extends Component {
    constructor(props) {
        super(props);

        this.authProtectorComponent = React.createRef();
    }

    handleAuthProtector = (link) => {
        this.authProtectorComponent.current.justLoggedUsersRedirect(link);
    }

    componentDidMount() {
        this.handleAuthProtector("/login");
    }

    render() {
        return (
            <div
                id="admin-users"
                className="container-fluid text-center bg-grey"
            >
                <section className="section admin-users">
                    <h2 className="title">Users</h2>
                    <h2 className="subtitle">New register</h2>
                    <AuthProtector ref={this.authProtectorComponent} link="/login" />
                    <RegisterOrLoginUser action="register" id="registerForm" className="registerForm" email="email" password="password" button="registerButton">
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <Input
                                    type="text"
                                    className="input"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                <Input
                                    type="text"
                                    className="input"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <Button
                                    type="button"
                                    className="btn btn-primary registerButton"
                                    id="registerButton"
                                    text="Register"
                                />
                            </div>
                        </div>
                    </RegisterOrLoginUser>
                </section>
            </div>
        );
    }
}
export default RegisterUser;
