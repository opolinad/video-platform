import express from 'express';
import { userExists } from '../middlewares/userExist.middleware';
import { videoExists } from '../middlewares/videoExist.middleware';
import { listAllVideos, createVideo, changePublish, videoDetails } from '../modules/video/video.controller';
import { changePublishValidator, createVideoValidator } from '../modules/video/video.validator';

const router = express.Router();

router.route('/')
    .get(listAllVideos)
    .post(createVideoValidator, userExists, createVideo);

router.route('/:videoId')
    .patch(videoExists, changePublishValidator, changePublish)
    .get(videoExists, videoDetails);

export default router;
