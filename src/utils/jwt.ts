import jwt from 'jsonwebtoken';


const JWT_SECRET: jwt.Secret = process.env.JWT_SECRET || 'change_this_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';


export function signToken(payload: object) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}


export function verifyToken(token: string) {
    return jwt.verify(token, JWT_SECRET) as any;
}