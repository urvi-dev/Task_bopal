import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { postUser } from "@/slices/thunks";

const EditUserModal = ({ isOpen, toggle, userData, onSuccess }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    email: "",
    number: "",
    gender: "",
    is_admin: "0",
  });

  useEffect(() => {
    if (userData) {
      setFormData({ ...userData });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async () => {
  const res = await dispatch(postUser(formData, formData.id));
  if (res.payload?.status === 200 || res.payload?.success) {
    onSuccess();
    toggle(); 
  }
};


  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit User</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input name="email" value={formData.email} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="number">Mobile Number</Label>
            <Input name="number" value={formData.number} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="gender">Gender</Label>
            <Input type="select" name="gender" value={formData.gender} onChange={handleChange}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="is_admin">Role</Label>
            <Input type="select" name="is_admin" value={formData.is_admin} onChange={handleChange}>
              <option value="1">Admin</option>
              <option value="0">User</option>
            </Input>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Save 
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditUserModal;
