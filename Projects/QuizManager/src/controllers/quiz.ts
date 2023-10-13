import { Request, Response, NextFunction } from "express";
import Quiz from "../models/quiz";

// return response template
interface ReturnResponse {
    status: "SUCCESS" | "ERROR";
    message: String;
    data: object;
  }

export const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quiz = new Quiz({
        created_by: req.userID,
        name: req.body.name,
        question_list: req.body.question_list,
        answers: req.body.answers,
        });
        const result = await quiz.save();
        const response: ReturnResponse = {status: "SUCCESS", message: "quiz created successfully", data: {quiz_id: result.id}}
        res.send(response)
    } catch (error) {
        next(error);
    }
};

export const getAllQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizzes = await Quiz.find();
        const response: ReturnResponse = {status: "SUCCESS", message: "quizzes found", data: quizzes}
        res.send(response);
    } catch (error) {
        next(error);
    }
}

export const getQuiz = (req: Request, res: Response) => {
  res.send(req.body);
};

export const updateQuiz = (req: Request, res: Response) => {
  res.send(req.body);
};

export const deleteQuiz = (req: Request, res: Response) => {
  res.send(req.body);
};

export const publishQuiz = (req: Request, res: Response) => {
  res.send(req.body);
};
