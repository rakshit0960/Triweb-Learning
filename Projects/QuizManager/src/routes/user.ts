import express from 'express' 
import {  getUser, getAllUser, updateUser } from '../controllers/user'

const router = express.Router();

// get specific user
router.get('/:userID', getUser);

// get all users
router.get('/', getAllUser);

router.put('/', updateUser);



export default router;