import React, { Component } from "react";
import { db, ref, set, push, databaseRef, put, storage, uploadBytes, getDownloadURL } from "../../init-firebase";

class Portfolio extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
           form: {
              title: "",
              description: "",
              image: "",
           },
        };
    }

    sendData(collection, title, description, files) {
        event.preventDefault();

        if(collection) {
            if(title && description) {
                this.setState({
                    form: {
                        ...this.state.form,
                        title: title.value,
                        description: description.value
                    },
                });

                try {
                    this.storageFile(files, collection);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }

    storageFile(file, collection) {
        if(file) {
            if(file.length > 0) {
                  return new Promise(resolve => {
                    Object.values(file).map(file => {
                        this.sendFile(file, collection);
                        resolve();
                    });
                  });
            } else {
                return new Promise(resolve => {
                    this.sendFile(file, collection);
                    resolve();
                });
            }
        }
    }

    sendFile(file, collection) {
        let fileRef = ref(storage, collection + "/" + file.name);
        
        uploadBytes(fileRef, file).then((response) => {
            console.log('1 - File sent!', response);
            return this.getFileUrl(file, collection);
        });
    }

    getFileUrl(file, collection) {
        if(file) {
            if(file.length > 0) {
                return Object.values(file).map(file => {
                    this.getStorageUrl(collection, file);
                });
            } else {
                return this.getStorageUrl(collection, file);
            }
        }
    }

    getStorageUrl(collection, file) {
        getDownloadURL(ref(storage, collection + "/" + file.name))
        .then((url) => {
            console.log("2 - Got file url", url)
            return this.sendForm(url, collection);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    sendForm(url, collection) { //to do melhorar simplificar id gerado
        push(databaseRef(db, collection + "/"), {
            title: this.state.form.title,
            description: this.state.form.description,
            image: url
        }).then((response) => {
            console.log('3 - Form sent', response);
            return response;
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