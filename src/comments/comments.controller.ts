import { CommentsService } from './comments.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentsCreateDto } from './dto/comments.create.dto';

@Controller('comments')
export class CommentsController {
    constructor(
        private readonly commentsService: CommentsService
    ) {}

    @Get()
    getAllComments() {
        return this.commentsService.getAllComments();
    }

    @Post(':id')
    createComment(
        @Param('id') id: string, 
        @Body() body: CommentsCreateDto
    ) {
        return this.commentsService.createComment(id, body);
    }

    @Post(':id')
    plusLike(@Param('id') id: string) {
        return this.commentsService.plusLike(id);
    }
}
