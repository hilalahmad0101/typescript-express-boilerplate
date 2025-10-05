import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import { validateBody } from '../middlewares/validate.middleware';
import Joi from 'joi';
import { loginSchema, registerSchema } from '../validation/user.validation';


const router = Router();



router.post('/register', validateBody(registerSchema), register);
router.post('/login', validateBody(loginSchema), login);


export default router;