import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { title } from "@/constants/constants";
import { useTranslation, withTranslation } from "react-i18next";


const Dashboard = () => {
  const { t } = useTranslation();
  // const user = useUser();
  // const { name: userName } = user;

  document.title = "Dashboard" + " | " + title;

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Dashboard" pageTitle="" />

          {/* Welcome Text */}
          <Row className="mb-4">
            <Col lg={12}>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "24px",
                  borderRadius: "8px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  marginTop: "20px",
                }}
              >
                <h2
                  style={{
                    fontSize: "28px",
                    color: "#333",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {`Welcome, ${"user"} ! 🎉`}
                </h2>
                <p style={{ fontSize: "16px", color: "#555", margin: 0 }}>
                  {`We're glad to see you. Let’s get started!`}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default withTranslation()(Dashboard);
