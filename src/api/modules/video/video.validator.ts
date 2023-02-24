import { NextFunction, Request, Response } from 'express';
import { ValidationChain, param } from 'express-validator';
import { validateParameters } from '../../utils/validateParameters.utils';

type middlewareFunction = (req: Request, res: Response, next: NextFunction) => void;

export const listOwnerInformationValidator: (ValidationChain | middlewareFunction)[] = [
    param('userId')
        .notEmpty()
        .isInt(),
    validateParameters
];