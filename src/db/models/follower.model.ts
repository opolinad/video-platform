import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import User from './user.model';

@Table({ timestamps: true,  tableName: 'follower' })
export default class Follower extends Model {
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    followedUserId: number;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    followerUserId: number;
}