import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { AppSettings } from './config/settings';
import mongoose from 'mongoose';
import userRouter from './models/user/user.routes';
import postRouter from './models/post/post.routes';

const server = express();

// Middleware
server.use(bodyParser.json());
server.use(cors());

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
server.use('/posts', postRouter);

const PORT = process.env.port || AppSettings.serverPort;

server.listen(PORT, (): void => console.log(`Server running on port ${PORT}`));
