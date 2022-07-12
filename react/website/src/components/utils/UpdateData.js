import { React, Component } from "react";
import { db, databaseRef, set } from "../../init-firebase";

class UpdateData extends Component {
    constructor() {
        super();

        this.state = {
            elements: [],
        };
    }

    componentDidMount() {
        this.updateData(this.props.collection, this.props.data);
    }

    updateData(collection, data) {
        const dbRef = databaseRef(db);

        set(dbRef(db, collection), {
            data
        })
            .then((resolve) => {
                console.log("Data updated! ", collection, resolve);
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    render() {
        return <div></div>;
    }
}

export default UpdateData;
