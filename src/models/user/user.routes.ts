import { Request, Response, Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req: Request, res: Response): void => {
    res.send('Hello, User!');
});

export = userRouter;
