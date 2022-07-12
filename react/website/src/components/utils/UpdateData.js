import React, { Component } from "react";
import { db, databaseRef, set } from "../../init-firebase";

class UpdateData extends Component {
    updateData(collection, form) {
        if ((collection !== null && collection !== undefined && collection !== "") && (form !== null && form !== undefined && form !== "") && (form.id !== null && form.id !== undefined)) {
            set(databaseRef(db, collection + "/" + form.id), {
                form
            })
                .then((response) => {
                    console.log("Form updated ", response);
                    return window.location.reload(false);
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        }
    }

    render() {
        return (<div />);
    }
}

export default UpdateData;
