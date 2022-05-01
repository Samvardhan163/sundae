import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Submit Button", () => {
  render(<SummaryForm />);
  const Button = screen.getByRole("button", { name: "submit" });
  expect(Button).toBeEnabled();
  expect(Button).toHaveTextContent("submit");
});

test("check Box", () => {
  render(<SummaryForm></SummaryForm>);
  const checkBox = screen.getByRole("checkbox", {
    name: /Terms and conditions/i,
  });
  expect(checkBox).not.toBeChecked();
});

test("check box checked and button disabled", () => {
  render(<SummaryForm></SummaryForm>);
  const Button = screen.getByRole("button", { name: "submit" });
  const checkBox = screen.getByRole("checkbox", {
    name: /Terms and conditions/i,
  });
  expect(Button).toBeEnabled();
  fireEvent.click(checkBox);
  expect(Button).toBeDisabled();
  fireEvent.click(checkBox);
  expect(Button).toBeEnabled();
});
