import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import { loggerStream } from './utils/logger';
import { errorHandler } from './middlewares/error.middleware';


dotenv.config();


const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined', { stream: loggerStream }));
app.use(errorHandler)

app.use('/api/auth', authRoutes);


app.get('/', (req, res) => res.send('OK'));


export default app;