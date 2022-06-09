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

    async sendData(collection, title, description, files) {
        event.preventDefault();

        if(collection) {
            if(title && description) {
                this.state.form.title = title.value;
                this.state.form.description = description.value;

                try {
                    //enviar formulário somente após o upload da imagem no storage
                    await this.storageFile(files, collection).then((snapshot) => { //Cannot read properties of undefined (reading 'then')
                        if (snapshot.exists()) {
                            this.sendForm(this.state.form, collection);
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
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
            this.getFileUrl(file, collection);
        });
    }

    getFileUrl(file, collection) {
        getDownloadURL(ref(storage, collection + "/" + file.name))
        .then((url) => {
            this.state.form.url = url;
        })
        .catch((error) => {
            console.log(error);
        });
    }

    sendForm(form, collection) { //to do melhorar simplificar id gerado
        console.log(form);
        push(databaseRef(db, collection + "/"), {
            title: form.title,
            description: form.description,
            image: form.image
        }).then((snapshot) => {
            console.log('Form sent!');
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