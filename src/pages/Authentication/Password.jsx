import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
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
import { title } from "@/constants/constants";
import AuthSlider from "../AuthenticationInner/authCarousel.jsx";
import withRouter from "../../Components/Common/withRouter.jsx";
import ParticlesAuth from "@/pages/AuthenticationInner/ParticlesAuth";

import {
  createPassword,
  forgotPassword,
  loginUser,
} from "../../slices/thunks.js";

const PasswordInput = ({ field, show, toggleShow, formik }) => (
  <div className="position-relative auth-pass-inputgroup mb-3">
    <Input
      name={field}
      value={formik.values[field] || ""}
      type={show ? "text" : "password"}
      className="form-control pe-5"
      placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      invalid={formik.touched[field] && formik.errors[field]}
      style={{ border: '1px solid #32383E', background: 'white', color: 'black' }}
    />
    {formik.touched[field] && formik.errors[field] && (
      <FormFeedback type="invalid">{formik.errors[field]}</FormFeedback>
    )}
    <Button
      outline
      color="#fff"
      className="btn position-absolute end-0 top-0 text-muted"
      type="button"
      onClick={() => toggleShow(field)}
    >
      {show ? <BsEyeSlashFill size={18} /> : <BsEyeFill size={18} />}
    </Button>
  </div>
);

const Password = ({ setVerificationEmail, verificationEmail, navigate }) => {
  const dispatch = useDispatch();
  const [passwordShow, setPasswordShow] = useState({
    password: false,
    password_confirm: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const isOTPVerified = verificationEmail?.data?.isOTPVerified ?? false;
  const isVerified = verificationEmail?.data?.isVerified ?? false;
  const isPasswordNull = verificationEmail?.data?.isPasswordNull ?? true;

  useEffect(() => {
    document.title =
      isOTPVerified && !isPasswordNull ? "Login" : "Login" + " | " + title;
  }, [isOTPVerified, isPasswordNull]);

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Please Enter Your Password")
      .min(6, "Password must be at least 6 characters"),
    password_confirm:
      (isOTPVerified && !isPasswordNull) || isVerified
        ? Yup.string()
        : Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Please Confirm Your Password"),
  });

  const formik = useFormik({
    initialValues: {
      email: verificationEmail?.email,
      password: "",
      password_confirm: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        if ((isOTPVerified && !isPasswordNull) || isVerified) {
          await dispatch(loginUser(values, navigate));
          window.location.reload();
        } else {
          const res = await dispatch(createPassword(values, navigate));
          if (res.payload.status === 200) {
            setVerificationEmail(null);
          }
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  const togglePasswordShow = (field) => {
    setPasswordShow((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleForgotPassword = () => {
    setIsLoading(true);
    const payload = {
      email: verificationEmail.email,
    };
    dispatch(forgotPassword(payload)).then((res) => {
      if (res.payload.status === 200) {
        setVerificationEmail({
          email: verificationEmail.email,
        });
        setIsLoading(false);
      }
    });
  };

  return (
    <>
      <ParticlesAuth>
        <div
          className="auth-page-content "
          style={{ overflow: "hidden", height: "100vh" }}
        >
          <Container style={{ marginTop: "150px" }}>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card
                  className="overflow-hidden mt-4"
                  style={{ background: "white" }}
                >
                  <CardBody className="p-4">
                   
                    <div className="text-center mt-2">
                      <h5 className="text-black" style={{ fontSize: "20px" }}>
                        {(isOTPVerified && !isPasswordNull) || isVerified
                          ? "Welcome Back !"
                          : "Setup New Password !"}
                      </h5>
                      {((isOTPVerified && !isPasswordNull) || isVerified) && (
                        <p className="text-muted" style={{ fontSize: "14px" , opacity: '0.9'}}>
                          Login to continue
                        </p>
                      )}
                    </div>
                    <div className="p-2 mt-4">
                      <Form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                          <Label
                            htmlFor="email"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Email
                          </Label>
                          <Input
                            name="email"
                            className="form-control"
                            value={verificationEmail?.email}
                            disabled
                            style={{
                              border: "1px solid #32383E",
                              background: "white",
                              color: "black",
                            }}
                          />
                        </div>
                        <div className="mb-3">
                          {((isOTPVerified && !isPasswordNull) ||
                            isVerified) && (
                            <div className="float-end">
                              <Link
                                disabled={true}
                                onClick={handleForgotPassword}
                                className="text-muted"
                              >
                                Forgot password?
                              </Link>
                            </div>
                          )}
                          <Label
                            className="form-label"
                            htmlFor="password-input"
                            style={{ color: "black" }}
                          >
                            Password
                          </Label>
                          <PasswordInput
                            field="password"
                            show={passwordShow.password}
                            toggleShow={togglePasswordShow}
                            formik={formik}
                          />
                          {((isOTPVerified && isPasswordNull) ||
                            !isVerified) && (
                            <>
                              <Label
                                className="form-label"
                                htmlFor="password-input"
                                style={{ color: "black" }}
                              >
                                Confirm Password
                              </Label>
                              <PasswordInput
                                field="password_confirm"
                                show={passwordShow.password_confirm}
                                toggleShow={togglePasswordShow}
                                formik={formik}
                              />
                            </>
                          )}
                        </div>
                        <div className="mt-4">
                          <Button
                          
                            type="submit"
                            className="w-100"
                            style={{ background: '#299cdb', border:'#299cdb' }}
                          >
                            {isLoading && (
                              <Spinner size="sm" className="me-2">
                                Loading...
                              </Spinner>
                            )}
                            Login
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

export default withRouter(Password);
