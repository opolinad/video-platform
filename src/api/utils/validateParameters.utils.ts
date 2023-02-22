import { Result, ValidationError, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';


export const validateParameters = (req: Request, res: Response, next: NextFunction) => {
    const errors: Result<ValidationError> = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMsgs: string[] = errors.array().map((err: ValidationError) => `${err.msg} for ${err.param}`);
        const errorMsgsWithoutDuplicates = Array.from(new Set(errorMsgs));
        const errorMsgsFormated: string = errorMsgsWithoutDuplicates.join(', \n');
        return res.status(400).json({ error: errorMsgsFormated });
    }
    next();
};