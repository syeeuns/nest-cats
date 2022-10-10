import { CommentsSaveDto } from './dto/comments.save.dto';
import { Model } from "mongoose";
import { Comment } from "./comments.schema";
export declare class CommentsRepository {
    private readonly commentModel;
    constructor(commentModel: Model<Comment>);
    findAll(): Promise<Comment[]>;
    findById(id: string): Promise<Comment>;
    create(comment: CommentsSaveDto): Promise<Comment>;
}
