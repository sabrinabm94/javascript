import React, { Component } from "react";
import { db, push, databaseRef } from "../../init-firebase";

//components
import Button from "../../components/Button";
import Input from "../../components/form/Input";
import Form from "../../components/form/Form";

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                id="admin-costumers"
                className="admin-costumers container-fluid text-center bg-grey"
            >
                <section className="section costumers">
                    <h2 className="title">Costumers</h2>
                    <Form collection="costumersElements" className="form">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="title"
                                    placeholder="title"
                                />
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="subtitle"
                                    placeholder="subtitle"
                                />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
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
export default Portfolio;
