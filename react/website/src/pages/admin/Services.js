import React, { Component } from "react";

//components
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import Form from "../../components/form/Form";

class Service extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="admin-service" className="container-fluid text-center bg-grey">
                <section className="section about">
                    <h2>Services</h2>
                    <Form collection="servicesElements" className="form">
                        <div className="row">
                            <div className="col-6 col-sm-6">
                                <Input type="text" className="input" name="icon" placeholder="Icon" />
                            </div>
                            <div className="col-6 col-sm-6">
                                <Input type="text" className="input" name="title" placeholder="Title" />
                            </div>
                            <div className="col-6 col-sm-6">
                                <Input type="text" className="input" name="subtitle" placeholder="Subtitle" />
                            </div>
                            <div className="col-12 col-sm-12">
                                <Button type="submit" className="btn btn-primary" text="Enviar"/>
                            </div>
                        </div>
                    </Form>
                </section>
            </div>
        )
    }
}
export default Service;