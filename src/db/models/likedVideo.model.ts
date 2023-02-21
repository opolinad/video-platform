import { Table, Column, Model, DataType, ForeignKey, AllowNull } from 'sequelize-typescript';
import User from './user.model';
import Video from './video.model';

@Table({ timestamps: true, tableName: 'likedVideo' })
export default class LikedVideo extends Model {
    @AllowNull(false)
    @ForeignKey(() => Video)
    @Column(DataType.INTEGER)
    videoId: number;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    likedByUserId: number;
}