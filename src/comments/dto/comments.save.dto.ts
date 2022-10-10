import { PickType } from "@nestjs/swagger";
import { Comment } from "../comments.schema";

export class CommentsSaveDto extends PickType(Comment, ['author', 'contents', 'info'] as const) {}