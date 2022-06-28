import { React, Component } from "react";
import { db, databaseRef, get } from "../init-firebase";

//components
import Picture from "../components/Picture";
import Glyphicon from "../components/Glyphicon";
import Button from "../components/Button";
import Input from "../components/form/Input";
import Textarea from "../components/form/Textarea";
import Form from "../components/form/Form";
import GetData from "../components/utils/GetData";

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            elements: [],
        };
    }

    handleCallback = (childData) => {
        this.setState(
            { elements: childData },
        )
    }

    fixBreaklines(text) {
        if (text) {
            return text.replace(/\n\r?/g, "<br />");
        }
    }

    render() {
        const { elements } = this.state;

        return (
            <section id="contact" className="contact container-fluid bg-grey">
                <GetData collection="contactElements" justOne={true} parentCallback={this.handleCallback} />
                <div className="text-center">
                    <h1 className="title">CONTACT</h1>
                    <h2 className="subtitle">Send your message</h2>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <p>{this.state.elements.content}</p>
                        <p>
                            <Glyphicon name="glyphicon-map-marker" />{" "}
                            {this.state.elements.address}
                        </p>
                        <p>
                            <Glyphicon name="glyphicon-phone" />{" "}
                            {this.state.elements.phone}
                        </p>
                        <p>
                            <Glyphicon name="glyphicon-envelope" />{" "}
                            {this.state.elements.email}
                        </p>
                    </div>
                    <div className="col-sm-7 slideanim slide">
                        <Form
                            collection="clientsContactElements"
                            className="form"
                        >
                            <div className="row">
                                <div className="col-sm-6">
                                    <Input
                                        type="text"
                                        className="input"
                                        name="name"
                                        placeholder="name"
                                        required={true}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <Input
                                        type="text"
                                        className="email"
                                        name="email"
                                        placeholder="email"
                                        required={true}
                                    />
                                </div>
                                <div className="col-sm-12">
                                    <Textarea
                                        className="input"
                                        name="comment"
                                        placeholder="comment"
                                        required={true}
                                    />
                                    <Button
                                        type="submit"
                                        className="btn btn-primary"
                                        text="Submit"
                                        disabled={false}
                                    />
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                <Picture
                    url={this.state.pictureUrl}
                    className="picture"
                    alt="map"
                />
            </section>
        );
    }
}

export default Contact;
