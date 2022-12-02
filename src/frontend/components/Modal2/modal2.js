import "../../../styles.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form2 from "../Form2/form2";

function Modal2(props) {
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
          Match Borrower Lender
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="card-body-title">
        <Form2 function={props.function} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="carousel-control-button">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modal2;
