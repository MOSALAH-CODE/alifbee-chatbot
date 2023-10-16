import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function StartLessonModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Lesson 1</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Tips for a Successful Session</h4>
        <p>
          🎧 Listen and Repeat: Pay attention to pronunciation and repeat
          phrases to improve your speaking skills.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <a
          className="btn btn-primary text-secondary fw-bold py-2 px-5"
          onClick={props.onHide}
        >
          Start the lesson
        </a>
      </Modal.Footer>
    </Modal>
  );
}

export default StartLessonModal;
