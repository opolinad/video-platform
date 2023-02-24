import express from 'express';
import { listAllVideos } from '../modules/video/video.controller';

const router = express.Router();

router.route('/')
    .get(listAllVideos);

export default router;
