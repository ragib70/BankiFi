import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Form1(props) {
  const [formTokenAddress, setFormTokenAddress] = useState("");
  const [formTokenAmount, setFormTokenAmount] = useState("");

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Token Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="ERC20-Token Address"
          onChange={(e) => {
            setFormTokenAddress(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          Deposit amount in stable token.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{props.title}</Form.Label>
        <Form.Control
          type="number"
          placeholder={props.placeholder}
          onChange={(e) => {
            setFormTokenAmount(e.target.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        className="carousel-control-button"
        onClick={() => {
          props.function(formTokenAddress, formTokenAmount);
        }}
      >
        Deposit
      </Button>
    </Form>
  );
}

export default Form1;
