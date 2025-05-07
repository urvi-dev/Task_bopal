import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, Button, Label } from "reactstrap";

const DeleteModal = ({ show, onDeleteClick, onCloseClick }) => (
  <Modal isOpen={show} toggle={onCloseClick} centered>
    <ModalBody className="py-3 px-5">
      <div className="text-center">
        <h4 className="mt-2">Are you sure?</h4>
        <Label className="text-muted mt-3">
          This action cannot be undone as all values associated with this field will be lost.
        </Label>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Button
          color="light"
          className="me-2"
          onClick={onCloseClick}
        >
          Close
        </Button>
        <Button
          color="danger"
          onClick={onDeleteClick}
        >
          Yes, Delete It!
        </Button>
      </div>
    </ModalBody>
  </Modal>
);

DeleteModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default DeleteModal;