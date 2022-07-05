import React, { Component } from "react";

//components
import Input from "../components/form/Input";
import Textarea from "../components/form/Textarea";
import Button from "../components/form/Button";
import Form from "../components/form/Form";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                id="page-login"
                className="container-fluid text-center bg-grey"
            >
                <section className="section page-login">
                    <h2 className="title">Login</h2>
                    <Form collection="LoginElements" className="form">
                        <div className="row">
                            <div className="col-6 col-sm-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="col-6 col-sm-6">
                                <Textarea
                                    className="input"
                                    name="passworld"
                                    placeholder="Passworld"
                                />
                            </div>
                            <div className="col-12 col-sm-12">
                                <Button
                                    type="submit"
                                    className="btn btn-primary"
                                    text="Submit"
                                />
                            </div>
                        </div>
                    </Form>
                </section>
            </div>
        );
    }
}
export default Login;
