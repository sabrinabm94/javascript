import { React, Component, useEffect, useState } from 'react';

import { fireStore } from '../init-firebase';


//components
import Thumbnail from '../components/Thumbnail';
import Carousel from '../components/Carousel';

const Portfolio = props => {
    // fireStore.collection("thumbnailElements").where("number", "==", 0)
    // .get()
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch((error) => {
    //     console.log("Error getting documents: ", error);
    // });

    const q = fireStore.query(fireStore.collection(fireStore, "thumbnailElements"), fireStore.where("number", "==", 0));
    const querySnapshot = fireStore.getDocs(q);
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    });

    return (
        <section id='portfolio' className='container-fluid text-center bg-grey'>
            <h2>Portfolio</h2><br />
            <h4>What we have created</h4>
            <div className='row text-center slideanim slide'>
                <>
                    {
                        // Object.keys(
                        //     thumbnailElements.map((data, id) => {
                        //         return (
                        //             <div className='col-sm-4' key={id}>
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
            <div className='row text-center slideanim slide'>
                {/* <Carousel elements={carouselElements} /> */}
            </div>
        </section>
    );

}
export default Portfolio;