import { useState } from "react";
import {
  Form,
  FormGroup,
  OverlayTrigger,
  Popover,
  PopoverBody,
} from "react-bootstrap";

function SummaryForm() {
  const [button, setbutton] = useState(false);
  const pop = (
    <Popover>
      <PopoverBody>no ice is deliver</PopoverBody>
    </Popover>
  );
  const checklabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={pop}>
        <span style={{ color: "blue" }}>Terms and conditions</span>
      </OverlayTrigger>
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
      <button variant="primary" disabled={!button}>
        submit
      </button>
    </Form>
  );
}

export default SummaryForm;
