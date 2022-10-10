import { Comment } from "../comments.schema";
declare const CommentsCreateDto_base: import("@nestjs/common").Type<Pick<Comment, "author" | "contents">>;
export declare class CommentsCreateDto extends CommentsCreateDto_base {
}
export {};
