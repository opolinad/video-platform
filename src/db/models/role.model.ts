import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import User from './user.model';


@Table({ timestamps: true, tableName: 'role' })
export default class Role extends Model {
    @Column(DataType.STRING)
    name: string;

    @HasMany(() => User)
    users: User[];
}