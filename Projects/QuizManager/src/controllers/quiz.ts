import { Request, Response, NextFunction } from "express";


export const createQuiz = (req: Request, res: Response) => {
    res.send(req.body);       
}

export const getQuiz = (req: Request, res: Response) => {
    res.send(req.body);       
}

export const updateQuiz = (req: Request, res: Response) => {
    res.send(req.body);       
}

export const deleteQuiz = (req: Request, res: Response) => {
    res.send(req.body);       
}

export const publishQuiz = (req: Request, res: Response) => {
    res.send(req.body);       
}
