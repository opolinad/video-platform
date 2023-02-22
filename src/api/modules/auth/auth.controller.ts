import {  Request, Response } from 'express';
import { logInUser, newExpireFor, registerAndLogInUser } from './auth.service';


export const signUpUser = async (req: Request, res: Response) => {
    try {
        const token: string = await registerAndLogInUser(req.body);
        res.json({ token });
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
};

export const signInUser = async (req: Request, res: Response) => {
    try {
        const token: string = await logInUser(req.body);
        res.json({ token });
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
};
export const refreshToken = async (req: Request, res: Response) => {
    try {
        const token: string = await newExpireFor(req.body.token);
        res.json({ token });
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
};