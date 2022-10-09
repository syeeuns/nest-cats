import { Injectable } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { CommentsCreateDto } from './dto/comments.create.dto';

@Injectable()
export class CommentsService {

    constructor(private readonly commentsRepository: CommentsRepository) {}

    getAllComments() {
        throw new Error('Method not implemented.');
    }

    createComment(id: string, body: CommentsCreateDto) {
        throw new Error('Method not implemented.');
    }

    plusLike(id: string) {
        throw new Error('Method not implemented.');
    }
}
