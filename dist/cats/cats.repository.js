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
exports.CatsRepository = void 0;
const comments_schema_1 = require("./../comments/comments.schema");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const mongoose_3 = require("mongoose");
const cats_schema_1 = require("./cats.schema");
let CatsRepository = class CatsRepository {
    constructor(catModel) {
        this.catModel = catModel;
    }
    async findAll() {
        const CommentModel = (0, mongoose_1.model)('comments', comments_schema_1.CommentSchema);
        return await this.catModel.find().populate('comments', CommentModel);
    }
    async findByEmail(email) {
        const cat = await this.catModel.findOne({ email });
        return cat;
    }
    async findByIdWithoutPassword(id) {
        const cat = await this.catModel.findById(id).select('-password');
        return cat;
    }
    async existsByEmail(email) {
        const result = await this.catModel.exists({ email });
        return !!result;
    }
    async create(cat) {
        const result = await this.catModel.create(cat);
        return result;
    }
    async findByIdAndUpdateImg(id, imangeUrl) {
        const cat = await this.catModel.findById(id);
        cat.imageUrl = imangeUrl;
        return cat.save();
    }
};
CatsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(cats_schema_1.Cat.name)),
    __metadata("design:paramtypes", [mongoose_3.Model])
], CatsRepository);
exports.CatsRepository = CatsRepository;
//# sourceMappingURL=cats.repository.js.map