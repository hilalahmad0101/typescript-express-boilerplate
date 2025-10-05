import { Request, Response, NextFunction } from 'express';
import * as authService from '../services/auth.service';


export async function register(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, password, name } = req.body;
        const result = await authService.registerUser(email, password, name);
        res.status(201).json({ success: true, data: { user: { id: result.user.id, email: result.user.email, name: result.user.name }, token: result.token } });
    } catch (err) {
        next(err);
    }
}


export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, password } = req.body;
        const result = await authService.loginUser(email, password);
        res.json({ success: true, data: { user: { id: result.user.id, email: result.user.email, name: result.user.name }, token: result.token } });
    } catch (err) {
        next(err);
    }
}