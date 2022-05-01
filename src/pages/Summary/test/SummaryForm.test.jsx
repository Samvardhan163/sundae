import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("Submit Button", () => {
  render(<SummaryForm />);
  const Button = screen.getByRole("button", { name: "submit" });
  expect(Button).toBeDisabled();
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
  expect(Button).toBeDisabled();
  userEvent.click(checkBox);
  expect(Button).toBeEnabled();
  userEvent.click(checkBox);
  expect(Button).toBeDisabled();
});

test("pop up", async () => {
  render(<SummaryForm></SummaryForm>);
  const popnull = screen.queryByText("no ice is deliver");
  expect(popnull).not.toBeInTheDocument();

  const termsandcondition = screen.getByText(/Terms and conditions/i);
  userEvent.hover(termsandcondition);

  const pop = screen.getByText(/no ice is deliver/i);
  expect(pop).toBeInTheDocument();

  userEvent.unhover(termsandcondition);

  // await waitForElementToBeRemoved(() => {
  //   return screen.queryByText(/no ice cream will actually be delivered/i);
  // });
  await waitForElementToBeRemoved(() => {
    return screen.queryByText(/no ice is deliver/i);
  });
});
