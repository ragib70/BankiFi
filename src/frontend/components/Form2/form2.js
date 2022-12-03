import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Form2(props) {
  const [formEns, setFormEns] = useState("");
  const [formNFTId, setFormNFTId] = useState("");

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ENS Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Borrower ENS Name"
          onChange={(e) => {
            setFormEns(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          Only borrower allowed to call this function.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>NFT Id</Form.Label>
        <Form.Control
          type="number"
          placeholder="NFT Token ID"
          onChange={(e) => {
            setFormNFTId(e.target.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        className="carousel-control-button"
        onClick={() => {
          props.function(formEns, formNFTId);
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default Form2;
