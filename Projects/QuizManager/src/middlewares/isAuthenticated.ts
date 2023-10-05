import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    
    if (!authHeader) 
        return res.status(401).send('Not Authenticated')

    const token = authHeader.split(" ")[1]

    try {
        const decodedToken: {userID: string, iat: number, exp: number} = <any>verify(token, process.env.SECRET_KEY || "")
        req.userID = decodedToken.userID;
        next()
    } catch (error) {
        throw new Error('user not able to be authenticated')
    }
    
}