import React from "react";
import Modal from "react-bootstrap/Modal";

import reportImg from "../../images/paymentSuccess.svg";

function ReportLessonModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter">
          Report has been sent
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img className="img-fluid" src={reportImg} alt="report" />
        <p>Thanks for helping AlifBee Grow Big</p>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <a
          className="btn btn-outline-secondary fw-bold py-2 px-5"
          onClick={props.onHide}
        >
          Close
        </a>
      </Modal.Footer>
    </Modal>
  );
}

export default ReportLessonModal;
