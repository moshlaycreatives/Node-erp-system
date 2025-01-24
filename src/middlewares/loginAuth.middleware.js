import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import {
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";

export const loginAuth = async (req, res, next) => {
  const token = req?.headers?.authorization;

  if (!token) {
    console.error("Token must be provided.");
    throw new NotFoundError("Token must be provided.");
  }

  let payload;
  try {
    payload = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
  } catch (error) {
    console.error("Invalid token provided.", error);
    throw new UnauthorizedError(error.message);
  }

  const user = await User.findOne({ _id: payload.id });

  if (!user) {
    console.error("User not found by provided token");
    throw new ForbiddenError("User not found by provided token");
  }

  req.userId = user._id;
  req.userRole = user.Role;

  next();
};
