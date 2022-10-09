import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Comment } from "./comments.schema";

@Injectable()
export class CommentsRepository {

    constructor(@InjectModel(Comment.name) private readonly catModel: Model<Comment>) {}


}