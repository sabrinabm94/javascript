import React, { Component } from "react";

//components
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Button/Button";
import File from "../../components/Form/File/File";
import Form from "../../components/Form/Form/Form";

//templates
import ShowData from "../../templates/admin/ShowData";

class Portfolio extends Component {
    render() {
        return (
            <div
            id="admin-portfolio"
            className="container-fluid text-center bg-grey"
        >
            <section className="section admin-portfolio">
                <h2 className="title">Portfolio</h2>
                <ShowData collection="portfolioElements" registerTitleInList="title" />
                <h2 className="subtitle">New register</h2>
                    <Form collection="portfolioElements" className="form">
                        <div className="row">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                                <Input
                                    type="text"
                                    className="input"
                                    name="title"
                                    placeholder="Title"
                                />
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                                <Input
                                    type="text"
                                    className="input"
                                    name="subtitle"
                                    placeholder="Subtitle"
                                />
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                                <File
                                    type="file"
                                    className="file"
                                    name="file"
                                    placeholder="File"
                                />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
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
export default Portfolio;
