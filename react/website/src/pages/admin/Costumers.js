import React, { Component } from "react";
import { db, push, databaseRef } from "../../init-firebase";

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    sendData(collection, title, subtitle) {
        event.preventDefault();

        if(collection) {
            if(title && subtitle) {
                let form = {
                    title: title.value,
                    subtitle: subtitle.value
                }
                try {
                    return this.sendForm(collection, form);
                } catch (error) {
                    console.log(error);
                    return error;
                }
            }
        }
    }

    sendForm(collection, form) { 
        if(collection) {
            push(databaseRef(db, collection + "/"), {
                title: form.title,
                subtitle: form.subtitle,
            }).then((response) => {
                console.log('Form sent', response);
                return response;
            });
        }
    }

    render() {
        return (
            <div id="admin-portfolio" className="container-fluid text-center bg-grey">
                <section className="section costumers">
                    <h2>Costumers</h2>
                    <form onSubmit={() => this.sendData("carouselElements", this.carouselTitle, this.carouselSubtitle)} className="form">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" id="carouselTitle" placeholder="Title" ref={carouselTitle => (this.carouselTitle = carouselTitle)} /> 
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="subtitle">Subtitle</label>
                                    <input type="text" className="form-control" id="carouselSubtitle" placeholder="subtitle" ref={carouselSubtitle => (this.carouselSubtitle = carouselSubtitle)} /> 
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        )
    }

}
export default Portfolio;