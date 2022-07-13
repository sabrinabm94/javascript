import React, { Component } from "react";

//components
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import Button from "../../components/form/Button";
import Form from "../../components/form/Form";
import Dropdown from "../../components/Dropdown";
import GetData from "../../components/utils/GetData";
import UpdateData from "../../components/utils/UpdateData";


class About extends Component {
    constructor() {
        super();

        this.updateDataComponent = React.createRef();

        this.state = {
            elements: [],
        };
    }

    handleUpdateData = (collection, form) => {
        this.updateDataComponent.current.updateData(collection, form);
    }

    handleGetData = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            this.setState({ elements: data });
        }
    };

    componentDidMount() {

    }

    showDataSelected() {
        //adicionar evento no click do dropdown-item
        //pegar o id do item clicado
        //buscar objeto do item clicado
        //injetar dados nos campos do formulário

        //fazer fluxo de upate da informação
        //this.handleUpdateData(collection, form);
    }

    deleteDataSelected() {
        //criar botão de deletar informação
    }

    render() {
        return (
            <div
                id="admin-about"
                className="container-fluid text-center bg-grey"
            >
                <h2 className="title">About</h2>
                <section className="section show-data">
                    <GetData
                        collection="aboutElements"
                        parentCallback={this.handleGetData}
                    />
                    <UpdateData ref={this.updateDataComponent} />
                    <h2 className="subtitle">Editar</h2>
                    <Dropdown
                        className="show-data-dropdown"
                        id="show-data-dropdown"
                        buttonText="Registros"
                    >
                        <>
                            {
                                this.state.elements !== null &&
                                this.state.elements !== undefined &&
                                this.state.elements.length > 0 &&
                                this.state.elements.map((data, key) => {
                                    console.log(data);
                                    return (
                                        <li className="dropdown-item" key={key} id={data.id}>
                                            {data.title}
                                        </li>
                                    );
                                })
                            }
                        </>
                    </Dropdown>
                </section>
                <section className="section admin-about">
                    <h2 className="subtitle">Cadastrar/Editar</h2>
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
