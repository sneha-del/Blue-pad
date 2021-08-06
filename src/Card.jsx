import React from "react";
import './card.css';
import "bootstrap/dist/css/bootstrap.min.css";


const Card = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                 BOOK desc
                </p>
  
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              
              </div>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-sm">
            <div className="card">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                Book desc
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
              book desc
                </p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;