import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import ProjectError from "../helper/ProjectError";


export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader) throw new ProjectError('Not Authorized');

        const token = authHeader.split(" ")[1]

        const decodedToken: { userID: string, iat: number, exp: number } = <any>verify(token, process.env.SECRET_KEY || "")
        req.userID = decodedToken.userID;
        next()
    } catch (error) {
        next(error);
    }
}