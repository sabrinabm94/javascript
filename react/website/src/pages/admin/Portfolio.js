import React, { Component } from "react";
import { db, ref, put, storage, uploadBytes } from "../../init-firebase";

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    async sendData(collection, title, description, files) {
        event.preventDefault();

        if(collection) {
            console.log("collection", collection);

            if(title && description) {
                console.log("title ", title.value);
                console.log("description ", description.value);
            }

            if(files) {
                this.storageFile(files, collection);
            }
        }
    }

    storageFile(files, collection) {
        if(files) {
            if(files.length > 0) {
                Object.values(files).map(file => {
                    this.sendFile(file, collection);
                });
            } else {
                this.sendFile(file, collection);
            }
        }
    }

    sendFile(file, collection) {
        let fileRef = ref(storage, collection + "/" + file.name);
        
        uploadBytes(fileRef, file).then((snapshot) => {
            console.log('File sent!');
        });
    }

    render() {
        return (
            <section id="admin-portfolio" className="container-fluid text-center bg-grey">
                <h2>Portfolio</h2>
                <form onSubmit={() => this.sendData("thumbnailElements", this.portfolioTitle, this.portfolioDescription, this.portfolioImage.files)} className="form">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="portfolioTitle" placeholder="Title" ref={portfolioTitle => (this.portfolioTitle = portfolioTitle)} /> 
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="form-control" id="portfolioDescription" placeholder="Description" ref={portfolioDescription => (this.portfolioDescription = portfolioDescription)} /> 
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group">
                                <label htmlFor="image"></label>
                                <input type="file" name="image" accept="image/*" id="portfolioImage" placeholder="Image" ref={portfolioImage => (this.portfolioImage = portfolioImage)} /> 
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </form>
                <h2>Costumers</h2>
                <form onSubmit={() => this.sendData("carouselElements", this.carouselTitle, this.carouselDescription)} className="form">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="carouselTitle" placeholder="Title" ref={carouselTitle => (this.carouselTitle = carouselTitle)} /> 
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="form-control" id="carouselDescription" placeholder="Description" ref={carouselDescription => (this.carouselDescription = carouselDescription)} /> 
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