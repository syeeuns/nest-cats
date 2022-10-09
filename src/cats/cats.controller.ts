import { multerOptions } from './../common/utils/multer.uptions';
import { JwtAuthGuard } from './../auth/jwt/jwt.guard';
import { LoginRequestDto } from './../auth/dto/login.request.dto';
import { AuthService } from './../auth/auth.service';
import { CatsService } from './cats.service';
import { Body, Controller, Get, Post, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { CatRequestDto } from './dto/cats.request.dto';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('cats')
export class CatsController {
    constructor(
        private readonly catsService: CatsService,
        private readonly authService: AuthService
    ) {}

    @Post()
    signUp(@Body() body: CatRequestDto) {
        return this.catsService.signUp(body);
    }

    @Post('/login')
    logIn(@Body() body: LoginRequestDto) {
        return this.authService.jwtLogIn(body);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getCurrentCat(@CurrentUser() cat) {
        return cat.readOnlyData;
    }

    @Post('/upload')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FilesInterceptor('files', 10, multerOptions('cats')))
    uploadCatImgs(@UploadedFiles() files: Array<Express.Multer.File>, @CurrentUser() cat) {
        return this.catsService.uploadImg(cat, files);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    getAllCats(@CurrentUser() cat) {
        return this.catsService.getAllCats();
    }
}
