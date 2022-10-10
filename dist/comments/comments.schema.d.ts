import { Document, Types } from "mongoose";
export declare class Comment extends Document {
    author: Types.ObjectId;
    info: Types.ObjectId;
    contents: string;
    likeCounts: number;
}
export declare const CommentSchema: import("mongoose").Schema<Comment, import("mongoose").Model<Comment, any, any>, undefined, {}>;
