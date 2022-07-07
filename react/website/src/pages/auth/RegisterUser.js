import React, { Component } from "react";

//components
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import RegisterOrLoginUser from "../../components/RegisterOrLoginUser";

class RegisterUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                id="page-register"
                className="container-fluid text-center bg-grey"
            >
                <section className="section page-register">
                    <h2 className="title">Register</h2>
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
