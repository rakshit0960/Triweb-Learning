import { Request, Response } from 'express'
import { addUserToDB } from '../model/userModel';

const registerUser = (req: Request, res: Response) => {
    addUserToDB('username', 'password');
    res.send('user Registered');
}



export { registerUser }