import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import User from '../../../db/models/user.model';
import { BusinessException } from '../../errors/businessException.errors';
import { mapErrorToString } from '../../utils/mapErrorsToString.utils';

dotenv.config();

interface userInformation {
    firstName?: string;
    lastName?: string;
    email: string;
    photoUrl?: string;
    password: string;
    roleId?: number;
}

interface token {
    id: number;
    exp: number
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

const generateAuthToken = async (id: number) => {
    const token = await jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '5s',
    });
    return token;
}

export const logInUser = async (userInformation: userInformation) => {
    try {
        const user = await User.findOne({ where: { email: userInformation.email } });
        const passwordMatch = await bcrypt.compare(userInformation.password, user.password);
        if (passwordMatch) {
            return await generateAuthToken(user.id);
        } else {
            throw new BusinessException(403, 'Invalid credentials');
        }
    } catch (error) {
        throw new BusinessException(403, 'Invalid credentials');
    }

}

export const newExpireFor = async (token:string) => {
    try {
        const tokenContent:(string|jwt.JwtPayload) = jwt.verify(token, process.env.JWT_SECRET);
        return await generateAuthToken((tokenContent as token).id);

    } catch (error) {
        throw new BusinessException(403, 'User not authenticated');
    }

}