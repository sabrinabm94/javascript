import React, { Component } from "react";
import { db, push, databaseRef } from "../../init-firebase";

class Form extends Component {
    constructor(props) {
        super(props);
    }

    sendData(collection) {
        event.preventDefault();

        if(collection) {
            let form = {};
            for(const key in event.target) {
                let element = event.target[Number(key)];

                if(element !== null && element != "" && element != undefined) {
                    let name = element.name;
                    let value = element.value;

                    if((name !== null && name != "" && name != undefined) 
                    && (value !== null && value != "" && value != undefined)) {
                        form[name] = value;
                    }
                }
            }
            if(form) {
                try {
                    return this.sendForm(collection, form);
                } catch (error) {
                    console.log(error);
                    return error;
                }
            }
        }
    }

    sendForm(collection, form) { 
        console.log(form);
        if(collection) {
            push(databaseRef(db, collection + "/"), { //pensar em como deixar mais generico
                title: form.title,
                content: form.content
            }).then((response) => {
                console.log('Form sent', response);
                return response;
            });
        }
    }

    render() {
        return (
            <form onSubmit={() => this.sendData(this.props.collection)} className={this.props.className}>
                {this.props.children}
            </form>
        )
    }
}
export default Form;