import Video from '../../../db/models/video.model'
import { paginateResults, pagination } from '../../utils/paginationItems.utils';


export const getVideos = async (paginationItems: pagination) => {
    const { limit, offset, pageNumber } = paginationItems;
    const videos = await Video.findAndCountAll({ limit, offset });
    const videosPaginated = paginateResults(videos, limit, pageNumber, 'video');
    return videosPaginated;
}