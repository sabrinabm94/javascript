import React, { Component } from "react";

//components
import Textarea from "../../components/form/Textarea";
import Button from "../../components/form/Button";
import Form from "../../components/form/Form";
import Input from "../../components/form/Input";
import File from "../../components/form/File";

//templates
import ShowData from "../../templates/admin/ShowData";

class About extends Component {
    render() {
        return (
            <div
                id="admin-contact"
                className="container-fluid text-center bg-grey"
            >
                <section className="section admin-contact">
                    <h2 className="title">Company contact information</h2>
                    <ShowData collection="contactElements" registerTitleInList="address" />
                    <h2 className="subtitle">New register</h2>
                    <Form collection="contactElements" className="form">
                        <div className="row">
                            <div className="col-6 col-sm-6">
                                <Textarea
                                    className="input"
                                    name="content"
                                    placeholder="Description"
                                />
                            </div>
                            <div className="col-6 col-sm-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="address"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="col-6 col-sm-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="phone"
                                    placeholder="Phone"
                                />
                            </div>
                            <div className="col-6 col-sm-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="col-6 col-sm-6">
                                <File
                                    type="file"
                                    className="file"
                                    name="file"
                                    placeholder="File"
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
