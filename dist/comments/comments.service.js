"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const cats_repository_1 = require("./../cats/cats.repository");
const common_1 = require("@nestjs/common");
const comments_repository_1 = require("./comments.repository");
let CommentsService = class CommentsService {
    constructor(commentsRepository, catsRepository) {
        this.commentsRepository = commentsRepository;
        this.catsRepository = catsRepository;
    }
    async getAllComments() {
        return await this.commentsRepository.findAll();
    }
    async createComment(id, body) {
        const { author, contents } = body;
        const authorCat = await this.catsRepository.findByIdWithoutPassword(author);
        const targetCat = await this.catsRepository.findByIdWithoutPassword(id);
        if (!targetCat || !authorCat) {
            throw new common_1.BadRequestException('해당하는 고양이가 없습니다.');
        }
        const comment = {
            author: authorCat._id,
            contents,
            info: targetCat._id
        };
        return await this.commentsRepository.create(comment);
    }
    async plusLike(id) {
        const targetComment = await this.commentsRepository.findById(id);
        targetComment.likeCounts += 1;
        return await targetComment.save();
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [comments_repository_1.CommentsRepository,
        cats_repository_1.CatsRepository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map