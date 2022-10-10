import { CommentsSaveDto } from './dto/comments.save.dto';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Comment } from "./comments.schema";

@Injectable()
export class CommentsRepository {
    
    constructor(@InjectModel(Comment.name) private readonly commentModel: Model<Comment>) {}
    
    async findAll() {
        return await this.commentModel.find();
    }
    
    async findById(id: string) {
        return await this.commentModel.findById(id);
    }

    async create(comment: CommentsSaveDto): Promise<Comment> {
        const result = await this.commentModel.create(comment);
        return result;
    }
}