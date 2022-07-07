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
                                (key, id) => elements[key].form
                            );
                        } else {
                            elements.forEach((element) => {
                                //loop para array
                                if (
                                    elementsArray.some(
                                        (item) => item.number === element.number
                                    ) === false ||
                                    elementsArray.some(
                                        (item) => item.id === element.id
                                    ) === false
                                ) {
                                    elementsArray.push(element.form);
                                }
                            });
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

    render() {}
}

export default GetData;
