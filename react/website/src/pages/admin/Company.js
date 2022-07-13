import React, { Component } from "react";

//components
import Input from "../../components/form/Input";
import File from "../../components/form/File";
import Textarea from "../../components/form/Textarea";
import Button from "../../components/form/Button";
import Form from "../../components/form/Form";
import GetData from "../../components/utils/GetData";

class Company extends Component {
    constructor() {
        super();

        this.state = {
            elements: [],
        };
    }
  
    handleCallback = (childData) =>{
        this.setState(
            {elements: childData}, 
        )
    }

    render() {
        return (
            <div
                id="admin-company"
                className="container-fluid text-center bg-grey"
            >
                <GetData collection="companyElements" justOne={true} parentCallback = {this.handleCallback}/>
                <section className="section admin-company">
                    <h2 className="title">Company</h2>
                    <Form collection="companyElements" className="form">
                        <div className="row">
                            <div className="col-6 col-sm-6">
                                <Input
                                    type="text"
                                    className="input"
                                    name="name"
                                    placeholder="name"
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
                                <File
                                    type="file"
                                    className="file"
                                    name="file"
                                    placeholder="Logo"
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
export default Company;
