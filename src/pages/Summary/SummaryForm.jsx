import { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

function SummaryForm() {
  const [button, setbutton] = useState(false);
  const checklabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and conditions</span>
    </span>
  );
  return (
    <Form>
      <FormGroup controlId="Terms and conditions">
        <Form.Check
          type="checkbox"
          onChange={() => {
            setbutton(!button);
          }}
          label={checklabel}
        ></Form.Check>
      </FormGroup>
      <button variant="primary" disabled={button}>
        submit
      </button>
    </Form>
  );
}

export default SummaryForm;
