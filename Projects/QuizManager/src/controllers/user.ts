import { Request, Response } from "express";
import { User, IUser } from '../models/user'

export const registerUser = async (req: Request, res: Response) => {
    const user = new User(req.body);
    await user.save();
    res.send(req.body);
}


