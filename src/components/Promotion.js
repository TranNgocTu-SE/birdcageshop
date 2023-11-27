import React from 'react'
import { Ads, Sale } from '../assets/Index';

const Promotion = () => {
    return (
        <div className='container'>
            <div className='my-3'>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Ads} className="d-block w-100" style={{ height: "200px" }} alt="..." />
                            <div className="carousel-caption d-none d-md-block text-dark text-start">
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src={Ads} className="d-block w-100" style={{ height: "200px" }} alt="..." />
                            <div className="carousel-caption d-none d-md-block text-dark text-start">
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src={Ads} className="d-block w-100" style={{ height: "200px" }} alt="..." />
                            <div className="carousel-caption d-none d-md-block text-dark text-start">
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Promotion;