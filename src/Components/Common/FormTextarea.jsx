import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Col, FormFeedback, Input, Label, Row } from "reactstrap";

const FormTextarea = ({
  name,
  placeholder,
  formik,
  disabled = false,
  type='text'
}) => {
  return (
    <>
      <TextArea
        id={name}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
        invalid={formik.touched[name] && formik.errors[name]}
        disabled={disabled}
        type={type}
        style={{marginBottom:'5px'}}
      />
      {formik.touched[name] && formik.errors[name] && (
        <FormFeedback>{formik.errors[name]}</FormFeedback>
      )}
    </>
  );
};

export default FormTextarea;
