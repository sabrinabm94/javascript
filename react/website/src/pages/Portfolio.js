import { React, Component, useEffect, useState } from "react";

import { db, fireStore, storage } from "../init-firebase";
import { query, where, collection, getDocs, doc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";

//components
import Thumbnail from "../components/Thumbnail";
import Carousel from "../components/Carousel";

const Portfolio = props => {
    const q = query(collection(fireStore, "thumbnailElements"));
    const querySnapshot = getDocs(q).then(querySnapshot => {
        querySnapshot.forEach((doc) => {
         console.log(doc.data());
        });
        return doc.data();
     })

    return (
        <section id="portfolio" className="container-fluid text-center bg-grey">
            <h2>Portfolio</h2><br />
            <h4>What we have created</h4>
            <div className="row text-center slideanim slide">
                <>
                    {
                        // Object.keys(
                        //     thumbnailElements.map((data, id) => {
                        //         return (
                        //             <div className="col-sm-4" key={id}>
                        //                 <Thumbnail imgSrc={data.image} title={data.title} subtitle={data.subtitle} />
                        //             </div>
                        //         );
                        //     })
                        // )
                    }
                </>
            </div>
            <br />
            <h2>What our customers say</h2>
            <div className="row text-center slideanim slide">
                {/* <Carousel elements={carouselElements} /> */}
            </div>
        </section>
    );

}
export default Portfolio;