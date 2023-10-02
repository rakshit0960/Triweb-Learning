import express from 'express' 
import { registerUser,  loginUser } from '../controllers/auth'

const router = express.Router();

// add new user in database
router.post('/', registerUser);

// login user
router.post('/login', loginUser);



export default router;