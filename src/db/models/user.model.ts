import { Table, Column, Model, DataType, ForeignKey, Unique, BelongsTo, HasMany } from 'sequelize-typescript';
import Role from './role.model';
import Video from './video.model';

@Table({ timestamps: true, tableName:'user' })
export default class User extends Model {
    @Column(DataType.STRING)
    firstName: string;

    @Column(DataType.STRING)
    lastName: string;

    @Unique
    @Column(DataType.STRING)
    email: string;

    @Column(DataType.STRING)
    photoUrl: string

    @Column(DataType.STRING)
    password: string;

    @ForeignKey(() => Role)
    @Column(DataType.INTEGER)
    roleId: number;

    @BelongsTo(() => Role)
    role: Role;

    @HasMany(() => Video)
    videos: Video[];
}