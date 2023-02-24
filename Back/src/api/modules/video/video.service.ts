import LikedVideo from '../../../db/models/likedVideo.model';
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

export const modifyVideo = async (videoInformation: videoInformation, videoId:number) => {
    try {
        await Video.update({ ...videoInformation }, { where: { id: videoId } });
        const video = Video.findByPk(videoId);
        return video;
    } catch (error) {
        throw new ServerException();
    }
}

export const updateLikeStatusForVideoByUser = async (userId:number, videoId:number) => {
    const [likedVideo, created] = await LikedVideo.findOrCreate({
        where: {
            likedByUserId:userId,
            videoId
        },
        defaults: {}
    });
    if (!created) {
        likedVideo.destroy();
        return `User ${userId} don't like anymore video ${videoId}`;
    }
    return `User ${userId} likes the video ${videoId}`;
}