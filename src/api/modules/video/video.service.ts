import Video from '../../../db/models/video.model'
import { ServerException } from '../../errors/serverException.errors';
import { paginateResults, pagination } from '../../utils/paginationItems.utils';

interface videoInformation{
    title: string;
    description?: string;
    url: string;
    thumbailUrl: string;
    userId: number;
}

export const getVideos = async (paginationItems: pagination) => {
    const { limit, offset, pageNumber } = paginationItems;
    const videos = await Video.findAndCountAll({ limit, offset });
    const videosPaginated = paginateResults(videos, limit, pageNumber, 'video');
    return videosPaginated;
}

export const saveVideo = async (videoInformation: videoInformation) => {
    try {
        const video = await Video.create({ ...videoInformation });
        return video;
    } catch (error) {
        throw new ServerException();
    }
}

export const changePublishParamater = async (isPublished:boolean, video:Video) => {
    try {
        const videoUpdated = await video.update({published: isPublished});
        return videoUpdated;
    } catch (error) {
        throw new ServerException();
    }
}