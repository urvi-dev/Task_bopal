import React from "react";
import { Col, FormFeedback, Label, Row, Input } from "reactstrap";

const FormDropdownField = ({
  name,
  label,
  options = [],
  formik,
  disabled = false,
}) => {
  return (
    <Row className="mb-3">
      <Col lg={3}>
        <Label htmlFor={name} className="form-label col-form-label-lg">
          {label}
        </Label>
      </Col>
      <Col lg={9}>
        <Input
          type="select"
          id={name}
          {...formik.getFieldProps(name)}
          invalid={formik.touched[name] && formik.errors[name]}
          disabled={disabled}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
        {formik.touched[name] && formik.errors[name] && (
          <FormFeedback>{formik.errors[name]}</FormFeedback>
        )}
      </Col>
    </Row>
  );
};

export default FormDropdownField;
