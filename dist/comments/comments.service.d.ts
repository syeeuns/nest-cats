import { CatsRepository } from './../cats/cats.repository';
import { CommentsRepository } from './comments.repository';
import { CommentsCreateDto } from './dto/comments.create.dto';
import { Comment } from './comments.schema';
export declare class CommentsService {
    private readonly commentsRepository;
    private readonly catsRepository;
    constructor(commentsRepository: CommentsRepository, catsRepository: CatsRepository);
    getAllComments(): Promise<Comment[]>;
    createComment(id: string, body: CommentsCreateDto): Promise<Comment>;
    plusLike(id: string): Promise<Comment>;
}
