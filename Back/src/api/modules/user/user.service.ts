import { Op } from 'sequelize';
import Follower from '../../../db/models/follower.model';
import LikedVideo from '../../../db/models/likedVideo.model';
import User from '../../../db/models/user.model';
import Video from '../../../db/models/video.model';
import { ServerException } from '../../errors/serverException.errors';
import { paginateResults, pagination } from '../../utils/paginationItems.utils';

interface userProfile extends User {
    followers?: User[];
    likedVideos?: Video[];
}

export const getUserProfile = async (user: User) => {
    try {
        const userProfile: userProfile = user.get({ plain: true });
        const followers = await getFollowersOfUser(user.id);
        const likedVideos = await getLikedVideosOfUser(user.id);

        userProfile.followers = followers;
        userProfile.likedVideos = likedVideos as Video[];

        return userProfile;
    } catch (error) {
        throw new ServerException();
    }
}

const getFollowersOfUser = async (userId: number) => {
    const followersOfUser = await Follower.findAll({
        where: {
            followedUserId: userId
        }
    });

    const followersIds = followersOfUser.map(follower => follower.followerUserId);

    const followers = await User.findAll({
        where:
        {
            id:
            {
                [Op.in]: followersIds
            }
        },
        raw: true
    });

    return followers;
}

export const getLikedVideosOfUser = async (userId: number, pagination?: pagination, url?: string) => {
    try {
        const videosLikedByUser = await LikedVideo.findAll({
            where: {
                likedByUserId: userId
            }
        });

        const likedVideosIds = videosLikedByUser.map(video => video.id);
        let likedVideos;
        if (pagination) {
            const { limit, offset, pageNumber } = pagination;

            const videos = await Video.findAndCountAll({
                where:
                {
                    id:
                    {
                        [Op.in]: likedVideosIds
                    }
                },
                raw: true,
                limit,
                offset
            });

            likedVideos = paginateResults(videos, limit, pageNumber, url);
        } else {
            likedVideos = await Video.findAll({
                where:
                {
                    id:
                    {
                        [Op.in]: likedVideosIds
                    }
                },
                raw: true
            });
        }

        return likedVideos;
    } catch (error) {
        throw new ServerException();
    }
}

export const updateFollowingStatus = async (userId: number, followedUserId: number) => {
    const [follower, created] = await Follower.findOrCreate({
        where: {
            followedUserId,
            followerUserId:userId
        },
        defaults: {}
    });
    if (!created) {
        follower.destroy();
        return `User ${userId} stopped following user ${followedUserId}`;
    }
    return `User ${userId} started following user ${followedUserId}`;
}