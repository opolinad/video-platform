import express from 'express';
import { userExists } from '../middlewares/userExist.middleware';
import { videoExists } from '../middlewares/videoExist.middleware';
import { listAllVideos, createVideo, changePublish, videoDetails, updateVideo, likeOrUnlikeVideo,  } from '../modules/video/video.controller';
import { changePublishValidator, createVideoValidator } from '../modules/video/video.validator';

const router = express.Router();

router.route('/')
    .get(listAllVideos)
    .post(createVideoValidator, userExists, createVideo);

router.route('/:videoId')
    .patch(videoExists, changePublishValidator, changePublish)
    .put(videoExists, createVideoValidator, updateVideo)
    .get(videoExists, videoDetails);

router.post('/:videoId/likedBy/:userId', videoExists, userExists, likeOrUnlikeVideo)

export default router;
