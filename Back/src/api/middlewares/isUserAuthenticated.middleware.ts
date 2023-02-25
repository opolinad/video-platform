import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken';

export const isUserAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        res.status(403).json({error:'User not authenticated'});
    }

}