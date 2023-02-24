import { NextFunction, Request, Response } from 'express';
import { body, ValidationChain } from 'express-validator';
import { validateParameters } from '../../utils/validateParameters.utils';

type middlewareFunction = (req: Request, res: Response, next: NextFunction) => void;

export const signUpUserValidator: (ValidationChain | middlewareFunction)[] = [
    body('firstName')
        .notEmpty()
        .isString(),
    body('lastName')
        .notEmpty()
        .isString(),
    body('photoUrl')
        .notEmpty()
        .isURL(),
    body('email')
        .notEmpty()
        .isEmail(),
    body('password')
        .notEmpty()
        .isLength({ min: 8 })
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$/),
    body('roleId')
        .notEmpty()
        .isIn([1, 2, 3]),
    validateParameters
];

export const signInUserValidator: (ValidationChain | middlewareFunction)[] = [
    body('email')
        .notEmpty()
        .isEmail(),
    body('password')
        .notEmpty()
        .isLength({ min: 8 })
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$/),
    validateParameters
];

export const refreshTokenValidator: (ValidationChain | middlewareFunction)[] = [
    body('token')
        .notEmpty()
        .isString(),
    validateParameters
];