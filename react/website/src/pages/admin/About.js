import React, { Component } from "react";

//components
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import Button from "../../components/form/Button";
import Form from "../../components/form/Form";

//templates
import ShowData from "../../templates/admin/ShowData";

class About extends Component {
    render() {
        return (
            <div
                id="admin-about"
                className="container-fluid text-center bg-grey"
            >
                <section className="section admin-about">
                    <h2 className="title">Company basic info</h2>
                    <ShowData collection="aboutElements" registerTitleInList="title" />
                    <h2 className="subtitle">New register</h2>
                    <Form collection="aboutElements" className="form">
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
                                <Textarea
                                    className="input"
                                    name="content"
                                    placeholder="Content"
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
export default About;
