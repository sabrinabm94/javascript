import React, { Component } from "react";
import {
    ref,
    storage,
    uploadBytes,
    getDownloadURL,
} from "../../init-firebase";

//components
import SetData from "../utils/SetData";

class Form extends Component {
    constructor(props) {
        super(props);

        this.setDataComponent = React.createRef();
    }

    handleSetData = (collection, form) => {
        this.setDataComponent.current.setData(collection, form);
    }

    sendData(collection) {
        // eslint-disable-next-line no-restricted-globals
        let e = event;
        e.preventDefault();

        if (collection) {
            let form = {};
            for (const key in e.target) {
                let element = e.target[Number(key)];

                if (element !== null && element !== "" && element !== undefined) {
                    let name = element.name;
                    let value = element.value;

                    if (
                        name !== null &&
                        name !== "" &&
                        name !== undefined &&
                        value !== null &&
                        value !== "" &&
                        value !== undefined
                    ) {
                        if (element.type === "file") {
                            form[name] = element.files;
                        } else {
                            form[name] = value;
                        }
                    }
                }
            }
            if (form) {
                try {
                    if (form.file) {
                        //formulario com arquivo
                        return this.storageFile(collection, form);
                    } else {
                        //formulario sem arquivo
                        return this.sendForm(collection, form);
                    }
                } catch (error) {
                    return error;
                }
            }
        }
    }

    storageFile(collection, form) {
        if (collection && form && form.file.length > 0) {
            return new Promise((resolve) => {
                Object.values(form.file).map((file) => {
                    //todo tratativa de erros para quando não for uma lista de arquivos
                    form.file = file;
                    this.sendFile(collection, form);
                    return resolve();
                });
            });
        }
    }

    sendFile(collection, form) {
        if (collection && form) {
            let fileRef = ref(storage, collection + "/" + form.file.name);

            uploadBytes(fileRef, form.file).then((response) => {
                return this.getFileUrl(collection, form);
            });
        }
    }

    getFileUrl(collection, form) {
        if (collection && form) {
            return this.getStorageUrl(collection, form);
        }
    }

    getStorageUrl(collection, form) {
        if (collection && form) {
            getDownloadURL(ref(storage, collection + "/" + form.file.name))
                .then((url) => {
                    form.file = url;
                    return this.sendForm(collection, form);
                })
                .catch((error) => {
                    return error;
                });
        }
    }

    sendForm(collection, form) {
        if (collection !== null && collection !== undefined && form !== null && form !== undefined) {
            this.handleSetData(collection, form);
        }
    }

    render() {
        return (
            <form
                onSubmit={() => this.sendData(this.props.collection)}
                className={this.props.className}
                id={this.props.className}
            >
                <SetData ref={this.setDataComponent} />
                {this.props.children}
            </form>
        );
    }
}
export default Form;
