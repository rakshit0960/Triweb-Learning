import express from 'express' 
import { registerUser, getUser, getAllUser, loginUser } from '../controllers/user'

const router = express.Router();

// add new user in database
router.post('/', registerUser);

// get specific user
router.get('/:userID', getUser);

// get all users
router.get('/', getAllUser);

router.post('/login', loginUser)



export default router;