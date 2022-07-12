import { React, Component } from "react";
import { db, databaseRef, get } from "../../init-firebase";

class GetData extends Component {
    constructor() {
        super();

        this.state = {
            elements: [],
        };
    }

    componentDidMount() {
        this.getData(this.props.collection);
    }

    getData(collection) {
        const dbRef = databaseRef(db);

        try {
            get(dbRef, collection).then((response) => {
                if (response.exists()) {
                    let elements = response.val()[collection];
                    let elementsArray = [];

                    if (elements && elements !== undefined && elements !== null) {
                        if (typeof elements === "object") {
                            //loop para objeto
                            elementsArray = Object.keys(elements).map(
                                (key) => elements[key].form
                            );
                        }
                        //console.log("Got data ", collection, elementsArray);

                        if(this.props.justOne === true) {
                            this.setState({
                                elements:
                                    elementsArray[elementsArray.length - 1], //só irá apresentar o ultimo registro
                            });
                        } else {
                            this.setState({
                                elements:
                                    elementsArray
                            });
                        }

                        this.props.parentCallback(this.state.elements);
                    }
                } else {
                    //console.log("No data available ", collection);
                }
            });
        } catch (error) {
            return error;
        }
    }

    render() {
        return(<div />);
    }
}

export default GetData;
