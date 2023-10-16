import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CloseLessonModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p>All progress in this lesson section will be lost.</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <a
          className="btn btn-outline-primary text-secondary fw-bold py-2 px-5"
          onClick={props.onHide}
        >
          Cancel
        </a>
        <a
          href="/"
          className="btn btn-primary text-secondary fw-bold py-2 px-5"
        >
          Quit
        </a>
      </Modal.Footer>
    </Modal>
  );
}

export default CloseLessonModal;
