import { Request, Response } from 'express';
import { ServerException } from '../../errors/serverException.errors';
import { paginationItems } from '../../utils/paginationItems.utils';
import { getVideos } from './video.service';

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

        res.json({videos});
    } catch (error) {
        throw new ServerException();
    }
}