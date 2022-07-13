import React, { Component } from "react";
import { db, databaseRef, remove } from "../../init-firebase";

class DeleteData extends Component {
    deleteData(collection, dataId) {
        let form = {};

        if (
            collection !== null &&
            collection !== undefined &&
            collection !== "" &&
            dataId !== null &&
            dataId !== undefined &&
            dataId !== ""
        ) { //verificação de parametros das chamadas direta da função
            form.id = dataId;
            this.deleteDataInDatabase(collection, form);
        } else if (
            this.props.collection !== null &&
            this.props.collection !== undefined &&
            this.props.collection !== "" &&
            this.props.dataId !== null &&
            this.props.dataId !== undefined &&
            this.props.dataId !== ""
        ) { //verificação de props das chamadas instanciando o componente
            form.id = this.props.dataId;
            this.deleteDataInDatabase(this.props.collection, form);
        }
    }

    deleteDataInDatabase(collection, form) {
        if (
            collection !== null &&
            collection !== undefined &&
            collection !== "" &&
            form !== null &&
            form !== undefined
        ) {
            remove(databaseRef(db, collection + "/" + form.id), {
                form,
            })
                .then((response) => {
                    console.log("Form deleted ", response);
                    alert("Form deleted!");
                    return window.location.reload(false);
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        }
    }

    render() {
        return;
    }
}

export default DeleteData;
