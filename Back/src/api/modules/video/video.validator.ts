import { NextFunction, Request, Response } from 'express';
import { ValidationChain, body } from 'express-validator';
import { validateParameters } from '../../utils/validateParameters.utils';

type middlewareFunction = (req: Request, res: Response, next: NextFunction) => void;

export const createVideoValidator: (ValidationChain | middlewareFunction)[] = [
    body('title')
        .notEmpty(),
    body('description')
        .notEmpty(),
    body('url')
        .notEmpty()
        .isURL(),
    body('thumbnailUrl')
        .notEmpty()
        .isURL(),
    body('userId')
        .notEmpty()
        .isInt(),
    validateParameters
];

export const changePublishValidator: (ValidationChain | middlewareFunction)[] = [
    body('published')
        .notEmpty()
        .isBoolean(),
    validateParameters
];