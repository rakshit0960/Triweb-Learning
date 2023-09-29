import { Request, Response } from "express";
import { User, IUser } from '../models/user'
import { Error } from "mongoose";
import bcrypt from 'bcryptjs';

interface ReturnResponse {
    status: "SUCCESS" | "ERROR",
    message: String,
    data: object
}

export const registerUser = async (req: Request, res: Response) => {
    try {
        let { name, email, password } = req.body;
        password = await bcrypt.hash(password, 12);
        const user = new User({name, email, password});
        const result = await user.save();

        const response: ReturnResponse = { status: "SUCCESS", message: "User Registered", data: { id: result.id } };
        res.send(response);
    } catch (err) {
        const response: ReturnResponse = { status: "ERROR", message: "Something Went Wrong", data: { err: err } };
        res.send(response);
    }
}


export const getUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userID;
        const user = await User.findOne({ _id: userId });
        const response: ReturnResponse = { status: "SUCCESS", message: "User Found", data: { user: user } }
        res.send(response);
    } catch (err) {
        const response: ReturnResponse = { status: "ERROR", message: "Something Went Wrong", data: { error: err } }
        if (err = Error.DocumentNotFoundError) response.message = "user Not found";
        res.send(response);
    }
}

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userID;
        const users = await User.find();
        const response: ReturnResponse = { status: "SUCCESS", message: "User Found", data: { users: users } }
        res.send(response);
    } catch (err) {
        const response: ReturnResponse = { status: "ERROR", message: "Something Went Wrong", data: { error: err } }
        res.send(response);
    }
}
