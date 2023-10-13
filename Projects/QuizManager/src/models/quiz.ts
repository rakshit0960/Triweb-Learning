import mongoose from "mongoose";
const { Schema, model } = mongoose;

const quizSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    questionList: [
      {
        question_number: Number,
        statement: String,
        options: {},
      },
    ],
    answer: {},
    createdBy: { type: mongoose.Types.ObjectId },
    password: { type: String, required: true },
    is_published: { type: Boolean },
  },
  { timestamps: true }
);

export const Quiz = model("Quiz", quizSchema);

export default Quiz;