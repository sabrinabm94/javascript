import React, { Component } from "react";

class Portfolio extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section id="admin-portfolio" className="container-fluid text-center bg-grey">
                <h2>Portfolio</h2>
                <form method="post" className="form">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <label for="title">Title</label>
                                <input type="text" className="form-control" id="title" placeholder="title" />
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <label for="description">Description</label>
                                <input type="text" className="form-control" id="description" placeholder="description" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group">
                                <label for="img"></label>
                                <input type="file" id="img" name="img" accept="image/*"></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </form>
                <h2>Costumers</h2>
                <form method="post" className="form">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <label for="title">Title</label>
                                <input type="text" className="form-control" id="title" placeholder="title" />
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <label for="description">Description</label>
                                <input type="text" className="form-control" id="description" placeholder="description" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </form>
            </section>
        )
    }

}
export default Portfolio;