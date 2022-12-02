import "../../styles.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form1 from "../Form1/form1";

function Modal1(props) {
  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="card-body-title"
        >
          {props.modalheader}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-body-title">
        <Form1
          function={props.function}
          title={props.title}
          placeholder={props.placeholder}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="carousel-control-button">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modal1;
