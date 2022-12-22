import React, { Component } from "react";
import { db, databaseRef, push } from "../../../init-firebase";

//components
import UpdateData from "../UpdateData/UpdateData";

class SetData extends Component {
    constructor(props) {
        super(props);

        this.updateDataComponent = React.createRef();
    }

    handleUpdateData = (collection, form) => {
        this.updateDataComponent.current.updateData(collection, form);
    }

    setData(collection, form) {
        if ((collection !== null && collection !== undefined && collection !== "")
            && (form !== null && form !== undefined && form !== "")) {
            push(databaseRef(db, collection + "/"), {
                form,
            }).then((response) => {
                //update form id in database
                let responseId = response.key;
                if (responseId && responseId !== undefined && responseId != null) {
                    form.id = responseId;
                    this.handleUpdateData(collection, form);
                }

                alert("Form sent!");
            });
        }
    }

    render() {
        return (
            <div>
                <UpdateData ref={this.updateDataComponent} />
            </div>
        );
    }
}

export default SetData;
