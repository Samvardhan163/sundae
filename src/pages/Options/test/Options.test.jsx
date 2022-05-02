import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("display image from each scoop option from server", async () => {
  render(<Options optionType="scoops"></Options>);

  const scoopImage = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImage).toHaveLength(2);

  const altText = scoopImage.map((element) => element.alt);
  expect(altText).toEqual(["chocolate scoop", "vanilla scoop"]);
});
test("display image from each toppings option from the server", async () => {
  render(<Options optionType="toppings"></Options>);

  const toppingsImage = await screen.findAllByRole("img", {
    name: /toppings$/i,
  });

  expect(toppingsImage).toHaveLength(2);
  const altText = toppingsImage.map((element) => element.alt);
  expect(altText).toEqual(["honey toppings", "gems toppings"]);
});
