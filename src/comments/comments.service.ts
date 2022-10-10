import { CommentsSaveDto } from './dto/comments.save.dto';
import { CatsRepository } from './../cats/cats.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { CommentsCreateDto } from './dto/comments.create.dto';
import { Comment } from './comments.schema';

@Injectable()
export class CommentsService {

    constructor(
        private readonly commentsRepository: CommentsRepository,
        private readonly catsRepository: CatsRepository
    ) {}

    async getAllComments() {
        return await this.commentsRepository.findAll();
    }

    async createComment(id: string, body: CommentsCreateDto) {
        const {author, contents} = body;
        const authorCat = await this.catsRepository.findByIdWithoutPassword(author);
        const targetCat = await this.catsRepository.findByIdWithoutPassword(id);
        if (!targetCat || !authorCat) {
            throw new BadRequestException('해당하는 고양이가 없습니다.');
        }
        const comment: CommentsSaveDto = {
            author: authorCat._id,
            contents,
            info: targetCat._id
        }
        return await this.commentsRepository.create(comment);
    }

    async plusLike(id: string) {
        const targetComment = await this.commentsRepository.findById(id);
        targetComment.likeCounts += 1;
        return await targetComment.save();
    }
}
