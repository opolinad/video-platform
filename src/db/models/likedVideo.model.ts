import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import User from './user.model';
import Video from './video.model';

@Table({ timestamps: true, tableName: 'likedVideo' })
export default class LikedVideo extends Model {
    @ForeignKey(() => Video)
    @Column(DataType.INTEGER)
    videoId: number;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    likedByUserId: number;
}