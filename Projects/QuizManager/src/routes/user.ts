import express, { application } from 'express' 
import { registerUser } from '../controllers/user'

const router = express.Router();

// add new user in database
router.post('/', registerUser);



export default router;