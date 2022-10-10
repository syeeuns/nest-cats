"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequestDto = void 0;
const cats_schema_1 = require("./../../cats/cats.schema");
const swagger_1 = require("@nestjs/swagger");
class LoginRequestDto extends (0, swagger_1.PickType)(cats_schema_1.Cat, ['email', 'password']) {
}
exports.LoginRequestDto = LoginRequestDto;
//# sourceMappingURL=login.request.dto.js.map