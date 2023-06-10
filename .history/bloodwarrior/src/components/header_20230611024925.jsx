import React ,
 { useState }from "react";
import { Carousel } from 'react-responsive-carousel';

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h2>
                  You need not be a doctor to save a life!
                  <span></span>
                </h2>
                <p>
                  We are Blood Warriors Foundation, a registered NGO with a
                  visionary mission to empower the community and break the
                  stigmas surrounding blood donation for Thalassemia patients.
                  We aspire to be the backbone of support for those affected by
                  this life-altering blood disorder. By fostering policy-level
                  change and promoting prenatal diagnosis, we aim to identify
                  carriers of Thalassemia, and build a future where this
                  debilitating disorder is a thing of the past.
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Carousel infiniteLoop autoPlay interval={2000}>
      <div>
        <img src="img/assets/NGOs.png" alt="Image 1" />
      </div>
      <div>
        <img src="img/assets/NGOs.png" alt="Image 2" />
      </div>
      <div>
        <img src="img/assets/NGOs.png" alt="Image 3" />
      </div>
      <div>
        <img src="img/assets/NGOs.png" alt="Image 1" />
      </div>
      <div>
        <img src="img/assets/NGOs.png" alt="Image 2" />
      </div>
      <div>
        <img src="img/assets/NGOs.png" alt="Image 3" />
      </div>
      <div>
        <img src="img/assets/NGOs.png" alt="Image 1" />
      </div>
      <div>
        <img src="img/assets/NGOs.png" alt="Image 2" />
      </div>
      <div>
        <img src="img/assets/NGOs.png" alt="Image 3" />
      </div>
      <div>
        <img src="img/assets/NGOs.png" alt="Image 1" />
      </div>
      <div>
        <img src="img/assets/NGOs.png" alt="Image 2" />
      </div>
      <div>
        <img src="img/assets/NGOs.png" alt="Image 3" />
      </div>

    </Carousel>
    </header>
  );
};
