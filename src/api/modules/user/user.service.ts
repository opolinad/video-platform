import { Op } from 'sequelize';
import Follower from '../../../db/models/follower.model';
import LikedVideo from '../../../db/models/likedVideo.model';
import User from '../../../db/models/user.model';
import Video from '../../../db/models/video.model';
import { ServerException } from '../../errors/serverException.errors';

interface userProfile extends User{
    followers?: User[];
    likedVideos?: Video[];
}

export const getUserProfile = async (user: User) => {
    try {
        const userProfile: userProfile = user.get({plain:true});
        const followers = await getFollowersOfUser(user.id);
        const likedVideos = await getLikedVideosOfUser(user.id);

        userProfile.followers = followers;
        userProfile.likedVideos = likedVideos;

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
        raw:true
    });

    return followers;
}

const getLikedVideosOfUser = async (userId: number) => {
    const videosLikedByUser = await LikedVideo.findAll({
        where: {
            likedByUserId: userId
        }
    });

    const likedVideosIds = videosLikedByUser.map(video => video.id);

    const likedVideos = await Video.findAll({
        where:
        {
            id:
            {
                [Op.in]: likedVideosIds
            }
        },
        raw:true
    });

    return likedVideos;
}