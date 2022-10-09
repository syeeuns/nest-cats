import { CatsService } from './cats.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CatRequestDto } from './dto/cats.request.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    async signUp(@Body() body: CatRequestDto) {
        return await this.catsService.signUp(body);
    }
}
