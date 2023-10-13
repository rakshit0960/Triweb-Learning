import { NextFunction, Request, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ProjectError from "../helper/ProjectError";
import { validationResult } from "express-validator";

// return response template
interface ReturnResponse {
  status: "SUCCESS" | "ERROR";
  message: String;
  data: object;
}

// register new user
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validationError = validationResult(req);

    if (!validationError.isEmpty()) {
      const error = new ProjectError("Validation Error");
      error.statusCode = 420;
      error.data = validationError.array();
      throw error;
    }
    let { name, email, password } = req.body;
    password = await bcrypt.hash(password, 12);
    const user = new User({ name, email, password });
    const result = await user.save();

    const response: ReturnResponse = {
      status: "SUCCESS",
      message: "User Registered",
      data: { id: result.id },
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

// login to a user using email and password
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new ProjectError("user Not found!");

    // comparing hashes to check if password is correct
    const status = await bcrypt.compare(password, user.password.toString());
    if (!status) throw new ProjectError("Wrong Credentials");

    // generating json web tokens
    const key = process.env.SECRET_KEY || "";
    const token = jwt.sign({ userID: user.id }, key, { expiresIn: "10h" });

    // sending token
    const response: ReturnResponse = {
      status: "SUCCESS",
      message: "Successful Logged",
      data: { token },
    };
    res.send(response);
  } catch (error: any) {
    next(error);
  }
};

export const isUserExist = async (email: string) => {
  const user = await User.findOne({ email });
  if (!user) return false;
  return true;
};
