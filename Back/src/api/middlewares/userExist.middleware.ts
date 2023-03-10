import { NextFunction, Request, Response } from 'express'
import User from '../../db/models/user.model'
import Video from '../../db/models/video.model';

export interface userProfileRequest extends Request {
    user: User
}

export const userExists = async (req: userProfileRequest, res: Response, next: NextFunction) => {
    const userId = req.params.userId || req.body.userId;
    const user = await User.findByPk(userId, {
        include: [Video]
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    req.user = user;
    next();
}