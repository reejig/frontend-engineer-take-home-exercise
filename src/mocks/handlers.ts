import { rest } from "msw";
import { talents } from "./talents";
export const handlers = [
  rest.get("/api/talents", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(talents));
  }),
];
