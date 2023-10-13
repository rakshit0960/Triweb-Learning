import { Request, Response, NextFunction } from "express";
import Quiz from "../models/quiz";
import ProjectError from "../helper/ProjectError";

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
        const quizzes = await Quiz.find({}, { name: true, question_list: true, answers: true });

        if (!quizzes) {
            const error = new ProjectError("no Quiz not found");
            error.statusCode = 404;
            throw error;
        }

        const response: ReturnResponse = {status: "SUCCESS", message: "quizzes found", data: quizzes}
        res.send(response);
    } catch (error) {
        next(error);
    }
}

export const getQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.params.quizId
    const quiz = await Quiz.findById(quizId, { name: true, question_list: true, answers: true });

    if (!quiz) {
        const error = new ProjectError("Quiz not found");
        error.statusCode = 404;
        throw error;
    }
  } catch (error) {
    next (error);
  }
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
