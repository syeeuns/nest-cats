"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsSaveDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const comments_schema_1 = require("../comments.schema");
class CommentsSaveDto extends (0, swagger_1.PickType)(comments_schema_1.Comment, ['author', 'contents', 'info']) {
}
exports.CommentsSaveDto = CommentsSaveDto;
//# sourceMappingURL=comments.save.dto.js.map