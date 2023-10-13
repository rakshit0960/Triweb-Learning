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
        const quizzes = await Quiz.find({created_by: req.userID}, { name: true, question_list: true, answers: true, is_published: true });

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

    const quiz = await Quiz.findById(quizId, { name: true, question_list: true, answers: true, is_published: true });

    if (!quiz) {
        const error = new ProjectError("Quiz not found");
        error.statusCode = 404;
        throw error;
    }

    if (quiz.created_by != req.userID) {
        const error = new ProjectError("not authorized to access this quiz");
        error.statusCode = 404;
        throw error;
    }

    const response: ReturnResponse = {status: "SUCCESS", message: "quiz found", data: quiz}
    res.send(response);
  } catch (error) {
    next (error);
  }
};

export const updateQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.params.quizId
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            const error = new ProjectError("Quiz not found");
            error.statusCode = 404;
            throw error;
        }
        
        if (quiz.created_by != req.userID) {
            const error = new ProjectError("not authorized to access this quiz");
            error.statusCode = 404;
            throw error;
        }

        if (quiz.is_published) {
            const error = new ProjectError("cannot updated published quiz");
            error.statusCode = 405;
            throw error;
        }

        quiz.name = req.body.name || quiz.name;
        quiz.question_list = req.body.question_list || quiz.question_list;
        quiz.answers = req.body.answers || quiz.answers;
        
        await quiz.save();
        const response: ReturnResponse = {status: "SUCCESS", message: "Quiz Updated", data: { quizId: quiz.id }}
        res.send(response)
    } catch (error) {
        next (error);
    }
};

export const deleteQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.params.quizId;
        
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            const error = new ProjectError("Quiz not found");
            error.statusCode = 404;
            throw error;
        }

        if (quiz.created_by != req.userID) {
            const error = new ProjectError("not authorized to access this quiz");
            error.statusCode = 404;
            throw error;
        }

        if (quiz.is_published) {
            const error = new ProjectError("cannot delete published quiz");
            error.statusCode = 405;
            throw error;
        }


        await Quiz.deleteOne({_id: quizId})

        const response: ReturnResponse = {status: "SUCCESS", message: "Quiz Deleted", data: {}}
        res.send(response)
    } catch (error) {
        next (error);
      }
};

export const publishQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            const error = new ProjectError("Quiz not found");
            error.statusCode = 404;
            throw error;
        }

        if (quiz.created_by != req.userID) {
            const error = new ProjectError("not authorized to access this quiz");
            error.statusCode = 404;
            throw error;
        }

        quiz.is_published = true;

        await quiz.save();
        
        const response: ReturnResponse = {status: "SUCCESS", message: "quiz published", data: { quizId: quiz.id }}
        res.send(response);
    } catch (error) {
        next (error);
    }
};
