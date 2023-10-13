import { NextFunction, Request, Response } from "express";
import { User } from "../models/user";
import  ProjectError  from '../helper/ProjectError' 

// return response template
interface ReturnResponse {
  status: "SUCCESS" | "ERROR";
  message: String;
  data: object;
}

// get specific user info using their id
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.userID;

    if (userId != req.userID)  {
      const error = new ProjectError("Cant get another Users Info");
      error.statusCode = 500;
      error.data = {}
      throw error;
    }

    // find user with id, userId in collection
    const user = await User.findOne({ _id: userId });

    if (!user) throw new ProjectError("user Not found!");
    // sending user
    const response: ReturnResponse = {
      status: "SUCCESS",
      message: "User Found",
      data: { user: user },
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

// update user
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userID = req.body._id;
        if (!userID) {
          const error = new ProjectError('user id not found in request body')
          error.statusCode = 401
          throw error;
        } 
        const user = await User.findById(userID);
        if (!user) throw new ProjectError("user with id not found");
        user.name = req.body.name;
        await user.save();

        const response: ReturnResponse = {status: "SUCCESS", message: "User Updated", data: {user}};
        res.send(response);
    } catch (error) {
        next(error);
    }
};
