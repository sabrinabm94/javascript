import { React, Component } from "react";

//components
import Picture from "../components/Picture/Picture";
import Glyphicon from "../components/Glyphicon/Glyphicon";
import Button from "../components/Button/Button";
import Input from "../components/Form/Input/Input";
import Textarea from "../components/Form/Textarea/Textarea";
import Form from "../components/Form/Form/Form";
import GetData from "../components/utils/GetData/GetData";
import Text from "../components/Text/Text";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: [],
            text: "",
        };
    }

    handleGetData = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            this.setState({ elements: data });
        }
    };

    handleBreaklines = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            this.setState({ text: data });
        }
    };

    render() {
        return (
            <section id="contact" className="contact container-fluid bg-grey">
                <GetData
                    collection="contactElements"
                    justOne={true}
                    parentCallback={(data) => {
                        this.handleGetData(data);
                    }}
                />
                <div className="text-center">
                    <h1 className="title">CONTACT</h1>
                    <h2 className="subtitle">Send your message</h2>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <Text
                            className="content"
                            text={this.state.elements.content}
                            parentCallback={this.handleBreaklines}
                        />
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
                                        className="btn-primary"
                                        text="Submit"
                                        disabled={false}
                                    />
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                <Picture
                    url={this.state.elements.file}
                    className="picture"
                    alt="map"
                />
            </section>
        );
    }
}

export default Contact;
