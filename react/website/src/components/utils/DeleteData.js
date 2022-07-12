import { React, Component } from "react";
import { db, databaseRef, remove } from "../../init-firebase";

class DeleteData extends Component {
    componentDidMount() {
        this.deleteData(this.props.collection, this.props.button);
    }

    deleteData(collection, buttonClassname) {
        if ((collection !== null && collection !== undefined && collection !== "") && (buttonClassname !== null && buttonClassname !== undefined && buttonClassname !== "")) {
            let buttonElements = document.querySelectorAll("." + buttonClassname);

            if (buttonElements !== undefined && buttonElements !== null && buttonElements.length > 0) {
                buttonElements.forEach(button => {
                    button.addEventListener("click", function () {
                        // eslint-disable-next-line no-restricted-globals
                        let dataElement = event.srcElement.parentElement.parentElement.parentElement;
                        let dataId = dataElement.id;
                        let form = {};

                        if (dataId !== null && dataId !== undefined) {
                            form.id = dataId;
                            remove(databaseRef(db, collection + "/" + dataId), {
                                form
                            })
                                .then((response) => {
                                    console.log("Form deleted ", response);
                                    return window.location.reload(false);
                                })
                                .catch((error) => {
                                    console.log(error);
                                    return error;
                                });
                        }

                    });
                });
            }
        }
    }

    render() {
        return (<span className={this.props.className} id={this.props.id}>x</span>);
    }
}

export default DeleteData;
