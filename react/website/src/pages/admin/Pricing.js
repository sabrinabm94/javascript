import React, { Component } from "react";

//components
import Input from "../../components/Form/Input/Input";
import Textarea from "../../components/Form/Textarea/Textarea";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form/Form";

//templates
import ShowData from "../../templates/admin/ShowData";

class Pricing extends Component {
    render() {
        return (
            <div
            id="admin-pricing"
            className="container-fluid text-center bg-grey"
        >
            <section className="section admin-pricing">
                <h2 className="title">Pricing</h2>
                <ShowData collection="pricingElements" registerTitleInList="title" />
                <h2 className="subtitle">New register</h2>
                    <Form collection="pricingElements" className="form">
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
                                <Input
                                    type="text"
                                    className="input"
                                    name="subtitle"
                                    placeholder="Subtitle"
                                />
                            </div>
                            <div className="col-6 col-sm-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="link"
                                    placeholder="Link"
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
export default Pricing;
