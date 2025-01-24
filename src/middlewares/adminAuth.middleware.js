import { ForbiddenError } from "../errors/customErrors.js";

export const adminAuth = async (req, res, next) => {
  if (req.userRole !== "Admin") {
    console.error("Invalid role.");
    throw new ForbiddenError("Invalid role");
  }

  next();
};
