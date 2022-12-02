import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Form3(props) {
  const [formId, setFormId] = useState("");

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>{props.title}</Form.Label>
        <Form.Control
          type="number"
          placeholder={props.placeholder}
          onChange={(e) => {
            setFormId(e.target.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        className="carousel-control-button"
        onClick={() => {
          props.function(formId);
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default Form3;
