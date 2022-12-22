import React, { Component } from "react";

//components
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form/Form";

//templates
import ShowData from "../../templates/admin/ShowData";

class Service extends Component {
    render() {
        return (
            <div
            id="admin-services"
            className="container-fluid text-center bg-grey"
        >
            <section className="section admin-services">
                <h2 className="title">Services</h2>
                <ShowData collection="servicesElements" registerTitleInList="title" />
                <h2 className="subtitle">New register</h2>
                    <Form collection="servicesElements" className="form">
                        <div className="row">
                            <div className="col-6 col-sm-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="title"
                                    placeholder="Title"
                                />
                            </div>
                            <div className="col-6 col-sm-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="subtitle"
                                    placeholder="Subtitle"
                                />
                            </div>
                            <div className="col-6 col-sm-6">
                                {/* todo melhorar seleção de icones */}
                                <Input
                                    type="text"
                                    className="input"
                                    name="icon"
                                    placeholder="Icon"
                                />
                            </div>
                            <div className="col-12 col-sm-12">
                                <Button
                                    type="submit"
                                    className="btn-primary"
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
export default Service;
