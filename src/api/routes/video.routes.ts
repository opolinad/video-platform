import express from 'express';
import { userExists } from '../middlewares/userExist.middleware';
import { listAllVideos, createVideo } from '../modules/video/video.controller';
import { createVideoValidator } from '../modules/video/video.validator';

const router = express.Router();

router.route('/')
    .get(listAllVideos)
    .post(createVideoValidator, userExists, createVideo);

export default router;
