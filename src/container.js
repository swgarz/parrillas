import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import image1 from './img/PARRILLAS/125  135CC/IMG_20190113_192758182.jpg';
import image2 from './img/PARRILLAS/125  135CC/imagen2_125_135_CC.png';


function Container() {
    return (
        <div>
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-6 card" style={{}}>
                        <img src={image1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">125 135CC</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="col-md-6 card" style={{}}>
                        <img src={image1}  className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">160 200CC</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-md-6 card" style={{}}>
                        <img src={image1}  className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">GIXER</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="col-md-6 card" style={{}}>
                        <img src={image1}  className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">ITALIKA</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="row">
                    <div className="col-md-12 card" style={{}}>
                        <img src={image1}  className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">400CC</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container">
        <div className="row">
            <div className="col">
            <img src={image2}  className="card-img-top" alt="..." />
            </div>
            <div className="col">
            <img src={image2}  className="card-img-top" alt="..." />
            </div>
        </div>
        <div className="row">
            <div className="col">
            <img src={image2}  className="card-img-top" alt="..." />
            </div>
            <div className="col">
            <img src={image2}  className="card-img-top" alt="..." />
            </div>
            <div className="col">
            <img src={image2}  className="card-img-top" alt="..." />
            </div>
        </div>
        </div>
        </div>


        
    )
}

export default Container;
