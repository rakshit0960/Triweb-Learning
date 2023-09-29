import { Request, Response } from "express";
import { User, IUser } from '../models/user'
import { Error } from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

interface ReturnResponse {
    status: "SUCCESS" | "ERROR",
    message: String,
    data: object
}

export const registerUser = async (req: Request, res: Response) => {
    try {
        let { name, email, password } = req.body;
        password = await bcrypt.hash(password, 12);
        const user = new User({ name, email, password });
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
        if (!user) throw new Error("user Not found!");
        const response: ReturnResponse = { status: "SUCCESS", message: "User Found", data: { user: user } }
        res.send(response);
    } catch (err) {
        const response: ReturnResponse = { status: "ERROR", message: "Something Went Wrong", data: { error: err } }
        if (err == Error.DocumentNotFoundError) response.message = "user Not found";
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


export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)

        const user = await User.findOne({ email });
        if (!user) throw new Error("user Not found!");

        const status = await bcrypt.compare(password, user.password.toString());
        if (!status) throw new Error("Wrong Credentials");

        const key = process.env.SECRET_KEY || "";
        const token = jwt.sign({ userID: user.id }, key, { expiresIn: '10h' });

        const response: ReturnResponse = { status: "SUCCESS", message: "Successful Logged", data: { token } }
        res.send(response);
    } catch (err: any) {
        const response: ReturnResponse = { status: "ERROR", message: "Something Went Wrong", data: { error: err } }
        if (err == Error.DocumentNotFoundError) response.message = "user Not found";

        if (err.message == "Wrong Credentials") {
            response.message = err.message
            res.status(401)
        }

        res.send(response);
    }
}