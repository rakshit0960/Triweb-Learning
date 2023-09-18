import { Request, Response } from 'express'
import { User, addUserToDB, updateUserData } from '../model/userModel';

const registerUser = (req: Request, res: Response) => {
    addUserToDB('username', 'password');
    res.send('user Registered');
}

const updateUser = (req: Request, res: Response) => {
    const user1: User = {
        id: 1,
        name: 'abc',
        age: 19,
        password: 'password123',
        accountStatus: 'unlocked'
    }
    const result = updateUserData(user1);
    res.send(result);
}


export { registerUser }