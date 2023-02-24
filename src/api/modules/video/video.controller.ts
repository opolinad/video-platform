import { Request, Response } from 'express';
import { ServerException } from '../../errors/serverException.errors';
import { videoRequest } from '../../middlewares/videoExist.middleware';
import { paginationItems } from '../../utils/paginationItems.utils';
import { changePublishParamater, getVideos, saveVideo } from './video.service';

export const listAllVideos = async (req: Request, res: Response) => {
    const { page, perPage } = req.query
    try {
        const pagination = paginationItems(page as string, perPage as string);
        const videos = await getVideos(pagination);
        res.json(videos);
    } catch (error) {
        throw new ServerException();
    }
}

export const createVideo = async (req: Request, res: Response) => {
    try {
        const video = await saveVideo(req.body);
        res.json({video});
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
}

export const changePublish = async (req: videoRequest, res: Response) => {
    try {
        const video = await changePublishParamater(req.body.published, req.video);
        res.json({video});
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
}