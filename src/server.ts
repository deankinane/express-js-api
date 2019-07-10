import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { AppSettings } from './config/settings';
import mongoose from 'mongoose';
import userRouter from './models/user.routes';

const server = express();

// Middleware
server.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect(AppSettings.mongoURI, { useNewUrlParser: true })
    .then((): void => console.log('Connected to MongoDB'))
    .catch((err): void => console.log(err));

// Routes
server.get('/', (req: Request, res: Response): void => {
    res.send('Hello, World!');
});
server.use('/users', userRouter);

const PORT = process.env.port || AppSettings.serverPort;

server.listen(PORT, (): void => console.log(`Server running on port ${PORT}`));
