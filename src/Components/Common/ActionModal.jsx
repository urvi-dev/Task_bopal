import React from "react";
import PropTypes from "prop-types";
import { Modal, ModalBody, Button, Label } from "reactstrap";

const ActionModal = ({ show, onActionClick, onCloseClick }) => (
  <Modal isOpen={show} toggle={onCloseClick} centered>
    <ModalBody className="py-3 px-5">
      <div className="text-center">
        <h4 className="mt-2">Are you sure?</h4>
        <Label className="text-muted mt-3">
          Are you sure you want to change the status?
        </Label>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Button color="light" className="me-2" onClick={onCloseClick}>
          Close
        </Button>
        <Button color="danger" onClick={onActionClick}>
          Yes
        </Button>
      </div>
    </ModalBody>
  </Modal>
);

ActionModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onActionClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default ActionModal;
