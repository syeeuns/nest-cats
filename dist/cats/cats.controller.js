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
exports.CatsController = void 0;
const jwt_guard_1 = require("./../auth/jwt/jwt.guard");
const login_request_dto_1 = require("./../auth/dto/login.request.dto");
const auth_service_1 = require("./../auth/auth.service");
const cats_service_1 = require("./cats.service");
const common_1 = require("@nestjs/common");
const cats_request_dto_1 = require("./dto/cats.request.dto");
const user_decorator_1 = require("../common/decorators/user.decorator");
const platform_express_1 = require("@nestjs/platform-express");
let CatsController = class CatsController {
    constructor(catsService, authService) {
        this.catsService = catsService;
        this.authService = authService;
    }
    signUp(body) {
        return this.catsService.signUp(body);
    }
    logIn(body) {
        return this.authService.jwtLogIn(body);
    }
    getCurrentCat(cat) {
        return cat.readOnlyData;
    }
    uploadCatImgs(files, cat) {
        return this.catsService.uploadImg(cat, files);
    }
    getAllCats() {
        return this.catsService.getAllCats();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_request_dto_1.CatRequestDto]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_request_dto_1.LoginRequestDto]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "logIn", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getCurrentCat", null);
__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "uploadCatImgs", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getAllCats", null);
CatsController = __decorate([
    (0, common_1.Controller)('cats'),
    __metadata("design:paramtypes", [cats_service_1.CatsService,
        auth_service_1.AuthService])
], CatsController);
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map