import { Document } from "mongoose";
import { Comment } from "src/comments/comments.schema";
export declare class Cat extends Document {
    email: string;
    name: string;
    password: string;
    imageUrl: string;
    readonly readOnlyData: {
        id: string;
        emial: string;
        name: string;
        imageUrl: string;
    };
    readonly comments: Comment[];
}
export declare const CatSchema: import("mongoose").Schema<Cat, import("mongoose").Model<Cat, any, any>, undefined, {}>;
