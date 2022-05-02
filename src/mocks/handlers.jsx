import { rest } from "msw";
export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "chocolate", imagepath: "/images/chocolate.png" },
        { name: "vanilla", imagepath: "/images/vanilla.png" },
      ])
    );
  }),
  rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "honey", imagepath: "/images/honey.png" },
        { name: "gems", imagepath: "/image/gems.png" },
      ])
    );
  }),
];
