import React from 'react';
import '../Gallery/Gallery.scss'
import gallery1 from '../../assets/images/gallery1.jpg'
import gallery2 from '../../assets/images/gallery2.jpg'
import gallery3 from '../../assets/images/gallery3.jpg'
import gallery4 from '../../assets/images/gallery4.jpg'
import gallery5 from '../../assets/images/gallery5.jpg'

const Gallery = () => {
    return(
        <div className="gallery">
            <div className="gallery__title">
                <h2>GALLERY</h2>
            </div>
            <div className="row-1">
                <img src={gallery1}></img>
                <img src={gallery2}></img>
            </div>
            <div className="row-2">
                <img src={gallery3}></img>
            </div>
            <div className="row-3">
                <img src={gallery4}></img>
                <img src={gallery5}></img>
            </div>
        </div>

    )}

export default Gallery;