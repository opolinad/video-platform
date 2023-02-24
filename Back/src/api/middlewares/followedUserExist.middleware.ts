import { NextFunction, Request, Response } from 'express'
import User from '../../db/models/user.model'

export const followedUserExists = async (req: Request, res: Response, next: NextFunction) => {
    const followedUserId = req.params.followedUserId;
    const user = await User.findByPk(followedUserId);
    if (!user) return res.status(404).json({ error: 'User to follow not found' });
    next();
}