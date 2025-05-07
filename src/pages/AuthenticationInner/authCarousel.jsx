import React from "react";
import { Col } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import Images
import logoMahjong from "../../assets/images/logo-mahjong-nepalgunj-removebg-preview.png";
const AuthSlider = () => {
  return (
    <React.Fragment>
      <Col lg={6}>
        <div className="p-lg-5 p-4 auth-one-bg h-100">
          <div className="bg-overlay"></div>
          <div className="position-relative h-100 d-flex flex-column">
            <div className="mb-4">
              <img src={logoMahjong} alt="" height="150" />
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};
export default AuthSlider;
