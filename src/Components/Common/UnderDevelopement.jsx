import React from "react";
import { Col, Container, Input, InputGroup, Row } from "reactstrap";

//import images
import comingsoon from "../../assets/images/coming-soon-img.png";
import { useTranslation } from "react-i18next";
import useTitle from "@/hooks/useTitle";

const ParticlesAuth = ({ children }) => {
  return (
    <React.Fragment>
      <div className="auth-page-wrapper pt-5">
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div className="bg-overlay"></div>

          <div className="shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1440 120"
            >
              <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
            </svg>
          </div>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

const UnderDevelopement = () => {
  const {t} = useTranslation();
  useTitle(t('Under Developement'));

  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content mt-lg-5">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 pt-4 mb-4">
                  <div className="mb-sm-5 pb-sm-4 pb-5">
                    <img
                      src={comingsoon}
                      alt=""
                      height="120"
                      className="move-animation"
                    />
                  </div>
                  <div className="mb-5">
                    <h1 className="display-2 coming-soon-text">Under Development</h1>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default UnderDevelopement;
