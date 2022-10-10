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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comments_schema_1 = require("./comments.schema");
let CommentsRepository = class CommentsRepository {
    constructor(commentModel) {
        this.commentModel = commentModel;
    }
    async findAll() {
        return await this.commentModel.find();
    }
    async findById(id) {
        return await this.commentModel.findById(id);
    }
    async create(comment) {
        const result = await this.commentModel.create(comment);
        return result;
    }
};
CommentsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comments_schema_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CommentsRepository);
exports.CommentsRepository = CommentsRepository;
//# sourceMappingURL=comments.repository.js.map