export class ServerException extends Error {
    public status: number;
    public message: string;
    constructor(status = 500, message = 'Internal server error') {
        super(message);
        this.status = status;
        this.message = message;
    }
}