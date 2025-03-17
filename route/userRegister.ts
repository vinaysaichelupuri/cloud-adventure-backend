import express, { Request, Response } from 'express';
import { UserService } from '../services/userRegister';

const router = express.Router(); 
const userService  = new UserService()
router.post('/users', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, imageURL } = req.body;
    const { status, message } = await userService.registerUser(firstName, lastName, imageURL);
    res.status(status).json({ message });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
    console.log(error)
  }
});
export default router;