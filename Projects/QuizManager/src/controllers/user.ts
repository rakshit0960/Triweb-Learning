import { Request, Response } from "express";


export const registerUser = (req: Request, res: Response): void => {
    console.log("Registered user");
    console.log(req.body);

    res.send('registration done');
}


