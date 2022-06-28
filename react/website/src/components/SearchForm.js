import React from "react";

//components
import Button from "../components/Button";
import Form from "../components/form/Form";
import Input from "../components/form/Input";

const SearchForm = (props) => {
    return (
        <Form className="search-form">
            <div className="row">
                <div className="col-sm-10">
                    <Input
                        type="text"
                        className="input"
                        placeholder=""
                        required={true}
                    />
                </div>
                <div className="col-sm-2">
                    <Button
                        text="Search"
                        className="btn-danger btn-full"
                        type="button"
                        disabled={false}
                    />
                </div>
            </div>
        </Form>
    );
};
export default SearchForm;
