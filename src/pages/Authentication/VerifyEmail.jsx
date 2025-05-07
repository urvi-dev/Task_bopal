import { useEffect, useState } from "react";
import { title } from "@/constants/constants";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  Form,
  FormFeedback,
  Spinner,
} from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ParticlesAuth from "@/pages/AuthenticationInner/ParticlesAuth";
// Import Images


// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// redux
import { useDispatch } from "react-redux";
import { checkVerificationEmail } from "../../slices/thunks.js";
import AuthSlider from "../AuthenticationInner/authCarousel";

const VerifyEmail = ({ verificationEmail, setVerificationEmail }) => {
  const dispatch = useDispatch();

  // Inside your component
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Email" + " | " + title;
  }, []);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: verificationEmail?.email || "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      dispatch(checkVerificationEmail(values)).then((res) => {
        if (res.payload.status === 200)
          setVerificationEmail({ ...res.payload, email: values.email });
        setIsLoading(false);
      });
    },
  });

  return (
    <>
      <ParticlesAuth>
        <div className="auth-page-content mt-lg-5">
          <Container style={{ marginTop: "200px" }}>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card
                  className="overflow-hidden mt-4"
                  style={{ background: "white" }}
                >
                  <CardBody className="p-4">
                    <div className="text-center mt-1">
                      <h5
                        className=""
                        style={{ fontSize: "18px", color: "black" }}
                      >
                        Welcome to Login!
                      </h5>
                      <p
                        className="text-muted"
                        style={{ fontSize: "14px", opacity: "0.9" }}
                      >
                        Log in to continue
                      </p>
                    </div>
                    <div className="p-2 mt-4">
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                        action="#"
                      >
                        <div className="mb-3">
                          <Label
                            htmlFor="email"
                            className="form-label "
                            style={{ color: "black" }}
                          >
                            Email
                          </Label>
                          <Input
                            name="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                            type="email"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.email || ""}
                            invalid={
                              validation.touched.email &&
                              validation.errors.email
                                ? true
                                : false
                            }
                            style={{
                              border: "1px solid #32383E",
                              background: "white",
                              color: "black",
                            }}
                          />
                          {validation.touched.email &&
                          validation.errors.email ? (
                            <FormFeedback type="invalid">
                              {validation.errors.email}
                            </FormFeedback>
                          ) : null}
                        </div>
                        <div className="mt-4">
                          <Button
                            disabled={isLoading ? true : false}
                            className="btn w-100"
                            type="submit"
                            style={{ background: "#299cdb", border: "#299cdb" }}
                          >
                            {isLoading ? (
                              <Spinner size="sm" className="me-2">
                                {" "}
                                Loading...{" "}
                              </Spinner>
                            ) : null}
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </div>
                   
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          
        </div>
      </ParticlesAuth>
    </>
  );
};

export default VerifyEmail;
