import { Table, Column, Model, DataType, ForeignKey, HasMany, Default, BelongsTo } from 'sequelize-typescript';
import LikedVideo from './likedVideo.model';
import User from './user.model';

@Table({ timestamps: true, tableName: 'video' })
export default class Video extends Model {
    @Column(DataType.STRING)
    title: string;

    @Column(DataType.TEXT)
    description: string;

    @Column(DataType.STRING)
    url: string;

    @Column(DataType.STRING)
    thumbnailUrl: string;

    @Default(false)
    @Column(DataType.BOOLEAN)
    published: boolean;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId: number;

    @HasMany(() => LikedVideo)
    likes: LikedVideo[];

    @BelongsTo(() => User)
    owner: User;

}