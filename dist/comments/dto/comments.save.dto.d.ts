import { Comment } from "../comments.schema";
declare const CommentsSaveDto_base: import("@nestjs/common").Type<Pick<Comment, "author" | "info" | "contents">>;
export declare class CommentsSaveDto extends CommentsSaveDto_base {
}
export {};
