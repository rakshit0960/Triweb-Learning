import { Request, Response } from "express";

import express from 'express';

import { registerUser }  from '../controller/userController';


const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.send('post user');
})

router.post('/add', registerUser);


export default router;