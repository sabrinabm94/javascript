import React, { Component } from "react";
import { db, databaseRef, set } from "../../init-firebase";

class UpdateData extends Component {
    updateData(collection, dataId) {
        if ((collection !== null && collection !== undefined && collection !== "") && (dataId !== null && dataId !== undefined && dataId !== "")) {
            let form = {};

            if (dataId !== null && dataId !== undefined) {
                form.id = dataId;
                set(databaseRef(db, collection + "/" + dataId), {
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
    }

    render() {
        return (<div />);
    }
}

export default UpdateData;
