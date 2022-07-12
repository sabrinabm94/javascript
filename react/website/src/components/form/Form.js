import React, { Component } from "react";
import {
    db,
    ref,
    push,
    set,
    databaseRef,
    storage,
    uploadBytes,
    getDownloadURL,
} from "../../init-firebase";

class Form extends Component {
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
                    console.log(error);
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
                console.log("1 - File sent!", response);
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
                    console.log("2 - Got file url", url);
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
            //save form in database
            push(databaseRef(db, collection + "/"), {
                form,
            }).then((response) => {
                console.log("Form sent", response);

                //update form id in database
                let responseId = response.key;
                if(responseId && responseId !== undefined && responseId != null) {
                    form.id = responseId;
                    set(databaseRef(db, collection + "/" + responseId), {
                        form
                      })
                      .then((response) => {
                        console.log("Form updated ", response);
                        return response;
                      })
                      .catch((error) => {
                        console.log(error);
                        return error;
                      });
                }
            });
        }
    }

    render() {
        return (
            <form
                onSubmit={() => this.sendData(this.props.collection)}
                className={this.props.className}
                id={this.props.className}
            >
                {this.props.children}
            </form>
        );
    }
}
export default Form;
