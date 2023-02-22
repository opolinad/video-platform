import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import User from '../../../db/models/user.model';
import { BusinessException } from '../../errors/businessException.errors';
import { mapErrorToString } from '../../utils/mapErrorsToString.utils';

dotenv.config();

interface userInformation {
    firstName: string;
    lastName: string;
    email: string;
    photoUrl: string;
    password: string;
    roleId: number;
}

export const registerAndLogInUser = async (userInformation: userInformation) => {
    try {
        const userCreated = await saveUserInDatabase(userInformation);
        const authToken = await generateAuthToken(userCreated.id);
        return authToken;
    } catch (error) {
        const errorMessages = mapErrorToString(error.errors);
        throw new BusinessException(400, errorMessages);
    }
}

const saveUserInDatabase = async (userInformation: userInformation) => {
    const saltRounds = Number(process.env.SALT_ROUNDS);
    const passwordEncrypted = await bcrypt.hash(userInformation.password, saltRounds);
    const userCreated = await User.create({ ...userInformation, password: passwordEncrypted });
    return userCreated;
};

const generateAuthToken = async (id:number) => {
    const token = await jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30m',
    });
    return token;
}