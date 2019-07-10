import Post, { PostInterface } from './post.model';

export default abstract class Posts {
    public static async getAll(): Promise<PostInterface[]> {
        return await Post.find({});
    }
}
