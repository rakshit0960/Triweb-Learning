import mongoose from "mongoose";
const { Schema, model } = mongoose;

const quizSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    question_list: [
      {
        question_number: {type: Number, required: true},
        question: String,
        options: {},
      },
    ],
    answers: {},
    created_by: { type: mongoose.Types.ObjectId, required: true },
    is_published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Quiz = model("Quiz", quizSchema);

export default Quiz;