import express from "express";
import { registerUser, loginUser, isUserExist } from "../controllers/auth";
import { body } from "express-validator";
import ProjectError from "../helper/ProjectError";

const router = express.Router();

// add new user in database
router.post(
  "/",
  body("name")
    .exists()
    .trim()
    .notEmpty()
    .isLength({ min: 4 })
    .withMessage("please Enter a valid name min 4 character long"),

  body("email")
    .trim()
    .isEmail()
    .custom((emailID: string) => {
      return isUserExist(emailID)
        .then((status) => {
          if (status) {
            return Promise.reject("user already exist");
          }
        })
        .catch((err) => Promise.reject(err));
    })
    .normalizeEmail(),

  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Enter password at least 8 character long"),

  body("confirm_password")
    .trim()
    .custom((value, { req }) => {
      if (value != req.body.password)
        return Promise.reject("password mismatch");
      return true;
    }),
  registerUser
);

// login user
router.post("/login", loginUser);

export default router;
