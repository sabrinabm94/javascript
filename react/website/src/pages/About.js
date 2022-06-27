import { React, Component } from "react";
import { db, databaseRef, get } from "../init-firebase";

//components
import Glyphicon from "../components/Glyphicon";

class About extends Component {
    constructor() {
        super();

        this.state = {
            render: <h1>Sem dados encontrados</h1>,
            aboutElements: [],
        };
    }

    componentDidMount() {
        this.getData("aboutElements");
    }

    getData(collection) {
        const dbRef = databaseRef(db);

        try {
            get(dbRef, collection).then((response) => {
                if(response.exists()) {
                    let elements = response.val()[collection];
                    let elementsArray = [];

                    if(typeof(elements) === "object") { //loop para objeto
                        elementsArray = Object.keys(elements).map((key, id) => elements[key])

                    } else {
                        elements.forEach((element) => { //loop para array
                            if(
                                elementsArray.some(
                                    (item) => item.number === element.number
                                ) === false ||
                                elementsArray.some(
                                    (item) => item.id === element.id
                                ) === false
                            ) {
                                elementsArray.push(element);
                            }
                        });
                    }
                    
                    console.log("Got data ");

                    if(collection === "aboutElements") {
                        this.setState({
                            aboutElements: elementsArray
                        });
                    }
                } else {
                    console.log("No data available");
                }
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    fixBreaklines(text) {
        if(text) {
            return text.replace(/\n\r?/g, '<br />');
        }
    }

    render() {
        return (
        <section className="container-fluid bg-grey">
            <>
                {this.state.aboutElements.map((data, key) => {
                    data = data.form;
                    data.content = this.fixBreaklines(data.content);
                    return (
                        <div className="row" key={key}>
                            <div className="col-sm-4">
                                <Glyphicon name={`glyphicon-${data.icon} logo slideanim slide`}/>
                            </div>
                            <div className="col-sm-8">
                                <h2 className="title">{data.title}</h2>
                                <br />
                                <h4 className="content" dangerouslySetInnerHTML={{ __html: data.content }}></h4>
                            </div>
                        </div>
                    );
                })}
            </>
        </section>
     );
    }
}

export default About;