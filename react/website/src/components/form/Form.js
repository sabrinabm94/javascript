import React, { Component } from "react";
import { db, ref, push, databaseRef, storage, uploadBytes, getDownloadURL } from "../../init-firebase";

class Form extends Component {
    constructor(props) {
        super(props);
    }

    sendData(collection) {
        event.preventDefault();

        if (collection) {
            let form = {};
            for (const key in event.target) {
                let element = event.target[Number(key)];

                if (element !== null && element != "" && element != undefined) {
                    let name = element.name;
                    let value = element.value;

                    if ((name !== null && name != "" && name != undefined)
                        && (value !== null && value != "" && value != undefined)) {
                        if(element.type === "file") {
                            form[name] = element.files;
                        } else {
                            form[name] = value;
                        }
                    }
                }
            }
            if (form) {
                try {
                    if(form.file) { //formulario com arquivo
                        return this.storageFile(collection, form);
                    } else { //formulario sem arquivo
                        return this.sendForm(collection, form);
                    }
                } catch (error) {
                    console.log(error);
                    return error;
                }
            }
        }
    }

    storageFile(collection, form) {
        console.log(form);
        if (collection && form && form.file.length > 0) {
            return new Promise(resolve => {
                Object.values(form.file).map(file => { //todo tratativa de erros para quando não for uma lista de arquivos
                    form.file = file;
                    this.sendFile(collection, form);
                    resolve();
                });
            });
        }
    }

    sendFile(collection, form) {
        if (collection && form) {
            let fileRef = ref(storage, collection + "/" + form.file.name);

            uploadBytes(fileRef, form.file).then((response) => {
                console.log('1 - File sent!', response);
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
                    console.log("2 - Got file url", url)
                    form.file = url;
                    return this.sendForm(collection, form);
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        }
    }

    sendForm(collection, form) {
        if (collection && form) {
            push(databaseRef(db, collection + "/"), {
                form
            }).then((response) => {
                console.log('3 - Form sent', response);
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