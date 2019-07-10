import { Router, Request, Response } from 'express';
import Posts from './post.controller';

const postRouter = Router();

postRouter.get(
    '/',
    async (req: Request, res: Response): Promise<void> => {
        var posts = await Posts.getAll();
        res.json(posts);
    },
);

export = postRouter;
