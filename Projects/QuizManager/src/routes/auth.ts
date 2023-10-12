import express from "express";
import { registerUser, loginUser } from "../controllers/auth";
import { body } from "express-validator";

const router = express.Router();

// add new user in database
router.post(
  "/",
  body("name")
    .exists()
    .trim()
    .notEmpty()
    .isStrongPassword()
    .withMessage("please Enter a valid name min 4 character long"),
  registerUser
);

// login user
router.post("/login", loginUser);

export default router;
