import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("display image from each scoop option from server", async () => {
  render(<Options optionType="scoops"></Options>);

  const scoopImage = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImage).toHaveLength(2);

  const altText = scoopImage.map((element) => element.alt);
  expect(altText).toEqual(["chocolate scoop", "vanilla scoop"]);
});
