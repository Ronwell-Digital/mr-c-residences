import React from 'react';
import '../Gallery/Gallery.scss'
import gallery1 from '../../assets/images/gallery1.jpg'
import gallery2 from '../../assets/images/gallery2.jpg'
import gallery3 from '../../assets/images/gallery3.jpg'
import gallery4 from '../../assets/images/gallery4.jpg'
import gallery5 from '../../assets/images/gallery5.jpg'

const Gallery = () => {
    return(
        <div className="gallery" id="gallery">
            <div className="gallery__title">
                <h2>GALLERY</h2>
            </div>
            <div className="row-1">
                <div className="container">
                    <img src={gallery1} alt="gallery" className="image"  />
                    <div className="middle">
                        <div className="text">View Image</div>
                    </div>
                </div>
                <div className="container">
                <img src={gallery2} alt="gallery" className="image"  />
                <div className="middle">
                    <div className="text">View Image</div>
                </div>
            </div>
            </div>
            <div className="row-2">
                <div className="container">
                    <img src={gallery3} alt="gallery" className="image"  />
                    <div className="middle">
                        <div className="text">View Image</div>
                    </div>
                </div>
            </div>
            <div className="row-3">
                <div className="container">
                    <img src={gallery4} alt="gallery" className="image"  />
                    <div className="middle">
                        <div className="text">View Image</div>
                    </div>
                </div>
                <div className="container">
                    <img src={gallery5} alt="gallery" className="image"  />
                    <div className="middle">
                        <div className="text">View Image</div>
                    </div>
                </div>
            </div>
        </div>

    )}

export default Gallery;