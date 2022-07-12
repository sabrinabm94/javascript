import React, { Component } from "react";
import { db, databaseRef, remove } from "../../init-firebase";

class DeleteData extends Component {
    deleteData(collection, dataId) {
        if ((collection !== null && collection !== undefined && collection !== "") && (dataId !== null && dataId !== undefined && dataId !== "")) {
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
        }
    }

    render() {
        return (<div />);
    }
}

export default DeleteData;
