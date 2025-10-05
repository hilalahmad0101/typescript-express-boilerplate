import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';


export function validateBody(schema: Joi.Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).json({ success: false, error: error.details.map(d => d.message).join(', ') });
        next();
    };
}