import { Prop, Schema, SchemaFactory, SchemaOptions } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, IsPositive, IsString } from "class-validator";
import { Document, Types } from "mongoose";

const options: SchemaOptions = {
    timestamps: true,
}

@Schema(options)
export class Comment extends Document {
    @Prop({
        type: Types.ObjectId,
        required: true,
        ref: "cats"
    })
    @IsNotEmpty()
    author: Types.ObjectId;

    @Prop({
        type: Types.ObjectId,
        required: true,
        ref: "cats"
    })
    @IsNotEmpty()
    info: Types.ObjectId;

    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    contents: string;

    @Prop({
        default: 0
    })
    @IsPositive()
    likeCounts: number;
  }

export const CommentSchema = SchemaFactory.createForClass(Comment);