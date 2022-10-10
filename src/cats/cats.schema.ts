import { Prop, Schema, SchemaFactory, SchemaOptions } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Document } from "mongoose";
import { Comment } from "src/comments/comments.schema";

const options: SchemaOptions = {
    timestamps: true,
}

@Schema(options)
export class Cat extends Document {
    @Prop({
        required: true,
        unique: true
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    @Prop({
        default: 'https://raw.githubusercontent.com/amamov/teaching-nestjs-a-to-z/main/images/1.jpeg'
    })
    @IsString()
    imageUrl: string;

    readonly readOnlyData: {
        id: string, 
        emial: string, 
        name: string,
        imageUrl: string
    };

    readonly comments: Comment[];
  }

const _CatSchema = SchemaFactory.createForClass(Cat);

_CatSchema.virtual('readOnlyData').get(function (this: Cat) {
    return {
        id: this.id,
        email: this.email,
        name: this.name,
        imageUrl: this.imageUrl,
        comments: this.comments
    }
})

_CatSchema.virtual('comments', {
    ref: 'comments',
    localField: '_id',
    foreignField: 'info'
});
_CatSchema.set('toObject', {virtuals: true});
_CatSchema.set('toJSON', {virtuals: true});

export const CatSchema = _CatSchema;