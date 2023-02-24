export const mapErrorToString = (errors: Error[]) => {
    const errorsMessages = errors.map(error => error.message);
    return errorsMessages.join(', \n');
}