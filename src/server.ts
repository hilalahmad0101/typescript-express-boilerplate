import app from './app';
import { PrismaClient } from '@prisma/client';
import { logger } from './utils/logger';


const prisma = new PrismaClient();


const PORT = process.env.PORT || 5000;


async function main() {
    // connect prisma
    await prisma.$connect();
    logger.info('Connected to database');


    app.listen(PORT, () => {
        logger.info(`Server listening on port ${PORT}`);
    });
}


main().catch((err) => {
    logger.error(err);
    process.exit(1);
});