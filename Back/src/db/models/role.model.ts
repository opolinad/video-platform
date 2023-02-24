import { Table, Column, Model, DataType, HasMany, AllowNull } from 'sequelize-typescript';
import User from './user.model';


@Table({ timestamps: true, tableName: 'role' })
export default class Role extends Model {
    @AllowNull(false)
    @Column(DataType.STRING)
    name: string;

    @HasMany(() => User)
    users: User[];
}