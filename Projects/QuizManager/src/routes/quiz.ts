import express from "express";

import { createQuiz, updateQuiz, deleteQuiz, getQuiz, publishQuiz, getAllQuiz } from "../controllers/quiz";

const router = express.Router();

// create quiz
router.post('/', createQuiz)

// get all quiz with id
router.get('/:quizId', updateQuiz)

// get all quiz
router.get('/',  getAllQuiz)

// update quiz
router.put('/', updateQuiz )

// delete quiz
router.delete('/:quizId', deleteQuiz )

// publish quiz
router.patch('/:quizId', publishQuiz)




export default router;