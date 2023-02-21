import { Table, Column, Model, DataType, ForeignKey, AllowNull } from 'sequelize-typescript';
import User from './user.model';

@Table({ timestamps: true,  tableName: 'follower' })
export default class Follower extends Model {
    @AllowNull(false)
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    followedUserId: number;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    followerUserId: number;
}