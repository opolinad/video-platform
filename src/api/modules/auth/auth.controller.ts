import {  Request, Response } from 'express';
import { registerAndLogInUser } from './auth.service';


export const signUpUser = async (req: Request, res: Response) => {
    try {
        const token: string = await registerAndLogInUser(req.body);
        res.json({ token });
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
};