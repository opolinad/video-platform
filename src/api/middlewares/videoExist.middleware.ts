import { NextFunction, Request, Response } from 'express'
import Video from '../../db/models/video.model';

export interface videoRequest extends Request {
    video: Video
}

export const videoExists = async (req: videoRequest, res: Response, next: NextFunction) => {
    const videoId = req.params.videoId || req.body.videoId;
    const video = await Video.findByPk(videoId);
    if (!video) return res.status(404).json({ error: 'Video not found' });
    req.video = video;
    next();
}