import React from "react";

//components
import Button from "../Button/Button";
import Form from "../Form/Form/Form";
import Input from "../Form/Input/Input";

const SearchForm = (props) => {
    return (
        <Form className="search-form">
            <div className="row">
                <div className="col-sm-10">
                    <Input
                        type="text"
                        className="input"
                        placeholder="Search"
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
