import React, { Component } from "react";

//components
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import Form from "../../components/form/Form";

class About extends Component {
    constructor(props) {
        super(props);
    }

    addBlock() {
        let button = querySelector(".addBlock");

        if(button) {
            button.addEventListener("click", function() {
                addNewForm();
            });
        }
        
    }

    addNewForm() {

    }

    render() {
        return (
            <div id="admin-about" className="container-fluid text-center bg-grey">
                <section className="section about">
                    <h2>About</h2>
                    <Button type="button" className="btn btn-primary addBlock" text="Adicionar bloco"/>
                    <Form collection="aboutElements" className="form">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <Input type="text" className="input" name="title" placeholder="Title" />
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <Input type="text" className="input" name="content" placeholder="Content" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <Button type="submit" className="btn btn-primary" text="Enviar"/>
                            </div>
                        </div>
                    </Form>
                </section>
            </div>
        )
    }
}
export default About;