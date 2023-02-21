import { Table, Column, Model, DataType, ForeignKey, HasMany, Default, BelongsTo, AllowNull } from 'sequelize-typescript';
import LikedVideo from './likedVideo.model';
import User from './user.model';

@Table({ timestamps: true, tableName: 'video' })
export default class Video extends Model {
    @AllowNull(false)
    @Column(DataType.STRING)
    title: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    url: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    thumbnailUrl: string;

    @Default(false)
    @AllowNull(false)
    @Column(DataType.BOOLEAN)
    published: boolean;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId: number;

    @HasMany(() => LikedVideo)
    likes: LikedVideo[];

    @BelongsTo(() => User)
    owner: User;

}