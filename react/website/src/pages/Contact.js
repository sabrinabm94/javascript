import { React, Component } from "react";
import { db, databaseRef, get } from "../init-firebase";

//components
import Picture from "../components/Picture";
import Glyphicon from "../components/Glyphicon";
import Button from "../components/Button";
import Input from "../components/form/Input";
import Textarea from "../components/form/Textarea";
import Form from "../components/form/Form";

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            render: <h1>Sem dados encontrados</h1>,
            contactElements: [],
            pictureUrl: "",
        };
    }

    componentDidMount() {
        this.getData("contactElements");
    }

    getData(collection) {
        const dbRef = databaseRef(db);

        try {
            get(dbRef, collection).then((response) => {
                if (response.exists()) {
                    let elements = response.val()[collection];
                    let elementsArray = [];

                    if (typeof (elements) === "object") { //loop para objeto
                        elementsArray = Object.keys(elements).map((key, id) => elements[key])

                    } else {
                        elements.forEach((element) => { //loop para array
                            if (
                                elementsArray.some(
                                    (item) => item.number === element.number
                                ) === false ||
                                elementsArray.some(
                                    (item) => item.id === element.id
                                ) === false
                            ) {
                                elementsArray.push(element);
                            }
                        });
                    }

                    console.log("Got data ");

                    if (collection === "contactElements") {
                        this.setState({
                            contactElements: elementsArray[elementsArray.length-1].form, //só irá apresentar o ultimo registro
                            pictureUrl: this.state.contactElements.file,
                        });
                    }
                } else {
                    console.log("No data available");
                }
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    fixBreaklines(text) {
        if (text) {
            return text.replace(/\n\r?/g, '<br />');
        }
    }

    render() {
        return (
            <section id="contact" className="container-fluid bg-grey">
                <h2 className="text-center">CONTACT</h2>
                <div className="row">
                    <div className="col-sm-5">
                        <p>{this.state.contactElements.content}</p>
                        <p><Glyphicon name="glyphicon-map-marker" /> {this.state.contactElements.address}</p>
                        <p><Glyphicon name="glyphicon-phone" /> {this.state.contactElements.phone}</p>
                        <p><Glyphicon name="glyphicon-envelope" /> {this.state.contactElements.email}</p>
                    </div>
                    <div className="col-sm-7 slideanim slide">
                        <Form collection="clientsContactElements" className="form">
                            <div className="row">
                                <div className="col-sm-6">
                                    <Input type="text" className="input" name="name" placeholder="name" required={true} />
                                </div>
                                <div className="col-sm-6">
                                    <Input type="text" className="email" name="email" placeholder="email" required={true} />
                                </div>
                                <div className="col-sm-12">
                                    <Textarea className="input" name="comment" placeholder="comment" required={true} />
                                    <Button type="submit" className="btn btn-primary" text="Enviar" disabled={false} />
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                <Picture url={this.state.pictureUrl} className="picture" alt="map" />
            </section>
        );
    }
}

export default Contact;