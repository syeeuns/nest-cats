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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const cats_repository_1 = require("./../cats/cats.repository");
const common_2 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(catsRepository, jwtService) {
        this.catsRepository = catsRepository;
        this.jwtService = jwtService;
    }
    async jwtLogIn(body) {
        const { email, password } = body;
        const cat = await this.catsRepository.findByEmail(email);
        if (!cat) {
            throw new common_1.UnauthorizedException('해당하는 cat이 없습니다.');
        }
        const isValidPassword = await bcrypt.compare(password, cat.password);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException('비밀번호가 일치하지 않습니다.');
        }
        const payload = { email, sub: cat.id };
        return { token: this.jwtService.sign(payload) };
    }
};
AuthService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [cats_repository_1.CatsRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map