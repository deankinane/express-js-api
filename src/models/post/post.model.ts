import mongoose, { Schema, Document } from 'mongoose';

export interface PostInterface extends Document {
    title: string;
    content: string;
}

const PostSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

export default mongoose.model<PostInterface>('Post', PostSchema);
