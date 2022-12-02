import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Form2(props) {
  const [formId, setFormId] = useState("");
  const [formURI, setFormURI] = useState("");
  const [formTime, setFormTime] = useState("");

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id</Form.Label>
        <Form.Control
          type="number"
          placeholder="Borrower Id"
          onChange={(e) => {
            setFormId(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          Only borrower allowed to call this function.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>NFT URI</Form.Label>
        <Form.Control
          type="text"
          placeholder="NFT URI as on IPFS"
          onChange={(e) => {
            setFormURI(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Vesting Time</Form.Label>
        <Form.Control
          type="number"
          placeholder="Time in months"
          onChange={(e) => {
            setFormTime(e.target.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        className="carousel-control-button"
        onClick={() => {
          props.function(formId, formURI, formTime);
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default Form2;
