import winston from 'winston';


export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    ),
    defaultMeta: { service: 'typescript-express-boilerplate' },
    transports: [new winston.transports.Console()]
});


export const loggerStream = {
    write: (message: string) => {
        logger.info(message.trim());
    }
};