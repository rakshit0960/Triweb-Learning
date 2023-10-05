import express from 'express' 
import {  getUser, updateUser } from '../controllers/user'
import { isAuthenticated } from '../middlewares/isAuthenticated'

const router = express.Router();

// get specific user
router.get('/:userID', isAuthenticated, getUser);

router.put('/', isAuthenticated, updateUser);



export default router;