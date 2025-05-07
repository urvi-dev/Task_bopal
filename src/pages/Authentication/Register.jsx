import React, { useEffect } from "react";
import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";
import { title } from "@/constants/constants";
// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

//import images
import logoLight from "../../assets/images/logo-light.png";

import { createSelector } from "reselect";
import AuthSlider from "../AuthenticationInner/authCarousel.jsx";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth.jsx";
import { Button } from "antd";
import { postregisterUser } from "@/slices/register_user/thunk.js";

const Register = () => {
  const dispatch = useDispatch();
  // const { loading, success, error } = useSelector(registerdatatype);
const navigate = useNavigate()
  const validation = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
      gender: '',
      password: '',
      confirm_password: '',
      is_admin: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please enter your name'),
      email: Yup.string().email('Invalid email').required('Please enter your email'),
      number: Yup.string().required('Please enter your mobile number'),
      gender: Yup.string().required('Please select your gender'),
      password: Yup.string().min(6).required('Please enter your password'),
      confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Please confirm your password'),
      is_admin: Yup.boolean(),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });
      dispatch(postregisterUser(formData));
    },
  });

  
  
  const selectLayoutState = (state) => state.Account;
  const registerdatatype = createSelector(selectLayoutState, (account) => ({
    success: account.success,
    error: account.error,
  }));
  const { loading, success, error } = useSelector(registerdatatype);
  
  useEffect(() => {
    if (success) {
      alert('Registration successful!');
    }
    if (error) {
      alert(`Error: ${error}`);
    }
  }, [success, error]);
  

  useEffect(() => {
    let timer;
    if (success) {
      toast.success(
        "Register User Successfully. Redirecting to Login Page...",
        { position: "top-right", autoClose: 2000 }
      );
      timer = setTimeout(() => navigate("/login"), 2000);
    }
    return () => clearTimeout(timer);
  }, [success, navigate]);

  useEffect(() => {
    if (success) {
      const resetTimer = setTimeout(() => {
        dispatch(resetRegisterFlag());
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [success, dispatch]);

  document.title = "Basic SignUp" + " | " + title;

  return (
    <ParticlesAuth>
      <div className="auth-page-content mt-lg-5">
        <Container style={{ marginTop: "50px" }}>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <Card className="mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Create New Account</h5>
                      <p className="text-muted">Get your free account now</p>
                    </div>

                    {/* Form Starts Here */}
                    <form onSubmit={validation.handleSubmit} className="p-2 mt-4">
                      {/* Name */}
                      <div className="mb-3">
                        <Label>
                          Name <span className="text-danger">*</span>
                        </Label>
                        <Input
                          name="name"
                          type="text"
                          value={validation.values.name}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={validation.touched.name && !!validation.errors.name}
                        />
                        <FormFeedback>{validation.errors.name}</FormFeedback>
                      </div>

                      {/* Email */}
                      <div className="mb-3">
                        <Label>
                          Email <span className="text-danger">*</span>
                        </Label>
                        <Input
                          name="email"
                          type="email"
                          value={validation.values.email}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={validation.touched.email && !!validation.errors.email}
                        />
                        <FormFeedback>{validation.errors.email}</FormFeedback>
                      </div>

                      {/* Phone Number */}
                      <div className="mb-3">
                        <Label>
                          Phone Number <span className="text-danger">*</span>
                        </Label>
                        <Input
                          name="number"
                          type="text"
                          value={validation.values.number}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={validation.touched.number && !!validation.errors.number}
                        />
                        <FormFeedback>{validation.errors.number}</FormFeedback>
                      </div>

                      {/* Gender */}
                      <div className="mb-3">
                        <Label>
                          Gender <span className="text-danger">*</span>
                        </Label>
                        <div>
                          <Label check>
                            <Input
                              type="radio"
                              name="gender"
                              value="male"
                              checked={validation.values.gender === "male"}
                              onChange={validation.handleChange}
                            />{" "}
                            Male
                          </Label>{" "}
                          <Label check>
                            <Input
                              type="radio"
                              name="gender"
                              value="female"
                              checked={validation.values.gender === "female"}
                              onChange={validation.handleChange}
                            />{" "}
                            Female
                          </Label>
                        </div>
                        {validation.touched.gender && validation.errors.gender && (
                          <FormFeedback className="d-block">
                            {validation.errors.gender}
                          </FormFeedback>
                        )}
                      </div>

                      {/* Password */}
                      <div className="mb-3">
                        <Label>
                          Password <span className="text-danger">*</span>
                        </Label>
                        <Input
                          name="password"
                          type="password"
                          value={validation.values.password}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={validation.touched.password && !!validation.errors.password}
                        />
                        <FormFeedback>{validation.errors.password}</FormFeedback>
                      </div>

                      {/* Confirm Password */}
                      <div className="mb-3">
                        <Label>
                          Confirm Password <span className="text-danger">*</span>
                        </Label>
                        <Input
                          name="confirm_password"
                          type="password"
                          value={validation.values.confirm_password}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={validation.touched.confirm_password && !!validation.errors.confirm_password}
                        />
                        <FormFeedback>{validation.errors.confirm_password}</FormFeedback>
                      </div>

                      {/* Is Admin */}
                      <div className="mb-3">
                        <Label check>
                          <Input
                            name="is_admin"
                            type="checkbox"
                            checked={validation.values.is_admin}
                            onChange={validation.handleChange}
                          />{" "}
                          Register as Admin
                        </Label>
                      </div>

                      {/* Submit Button */}
                      <div className="mt-4">
                        <Button
                          type="submit"
                          className="btn w-100"
                          style={{
                            background: "#299cdb",
                            border: "#299cdb",
                          }}
                          disabled={validation.isSubmitting} // Disable button while submitting
                        >
                          Sign Up
                        </Button>
                      </div>
                    </form>
                    {/* Form Ends Here */}
                  </CardBody>
                </Card>
                <div className="text-center mt-3">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </ParticlesAuth>
  );
};

export default Register;
