import { Table, Column, Model, DataType, ForeignKey, Unique, BelongsTo, HasMany, AllowNull } from 'sequelize-typescript';
import Role from './role.model';
import Video from './video.model';

@Table({ timestamps: true, tableName: 'user' })
export default class User extends Model {
    @AllowNull(false)
    @Column(DataType.STRING)
    firstName: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    lastName: string;

    @Unique
    @AllowNull(false)
    @Column(DataType.STRING)
    email: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    photoUrl: string

    @AllowNull(false)
    @Column(DataType.STRING)
    password: string;

    @ForeignKey(() => Role)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    roleId: number;

    @BelongsTo(() => Role)
    role: Role;

    @HasMany(() => Video)
    videos: Video[];
}