import { NotFoundError } from "../errors/customErrors.js";

export const routeNotFound = (req, res) => {
  console.error("Route does not found.");
  throw new NotFoundError("Route does not found");
};
