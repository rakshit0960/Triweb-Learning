import { Request, Response } from "express";
import { User, } from '../models/user'
import { Error } from "mongoose";

// return response template 
interface ReturnResponse {
    status: "SUCCESS" | "ERROR",
    message: String,
    data: object
}



// get specific user info using their id
export const getUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userID;
        
        if (userId != req.userID) throw new Error("Cant get another Users Info")

        // find user with id, userId in collection
        const user = await User.findOne({ _id: userId });

        if (!user) throw new Error("user Not found!");
        // sending user  
        const response: ReturnResponse = { status: "SUCCESS", message: "User Found", data: { user: user } }
        res.send(response);
    } catch (error) {
        const response: ReturnResponse = { status: "ERROR", message: "Something Went Wrong", data: { error } }
        if (error == Error.DocumentNotFoundError) response.message = "user Not found";
        res.send(response);
    }
}

// update user
export const updateUser = (req: Request, res: Response) => {

}