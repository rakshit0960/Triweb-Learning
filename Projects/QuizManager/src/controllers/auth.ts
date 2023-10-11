import { Request, Response } from "express";
import { User } from '../models/user'
import { Error as ProjectError } from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import ProjectError from "../helper/ProjectError";

// return response template 
interface ReturnResponse {
    status: "SUCCESS" | "ERROR",
    message: String,
    data: object
}

// register new user
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


// login to a user using email and password
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)

        const user = await User.findOne({ email });
        if (!user) throw new ProjectError("user Not found!");

        // comparing hashes to check if password is correct
        const status = await bcrypt.compare(password, user.password.toString());
        if (!status) throw new ProjectError("Wrong Credentials");

        // generating json web tokens 
        const key = process.env.SECRET_KEY || "";
        const token = jwt.sign({ userID: user.id }, key, { expiresIn: '10h' });

        // sending token
        const response: ReturnResponse = { status: "SUCCESS", message: "Successful Logged", data: { token } }
        res.send(response);

    } catch (err: any) {
        
        const response: ReturnResponse = { status: "ERROR", message: "Something Went Wrong", data: { error: err } }
        if (err == ProjectError.DocumentNotFoundError) response.message = "user Not found";
        
        if (err.message == "Wrong Credentials") {
            response.message = err.message
            res.status(401)
        }

        res.send(response);
    }
}
