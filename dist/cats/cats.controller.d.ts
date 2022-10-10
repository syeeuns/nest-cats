/// <reference types="multer" />
import { LoginRequestDto } from './../auth/dto/login.request.dto';
import { AuthService } from './../auth/auth.service';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';
export declare class CatsController {
    private readonly catsService;
    private readonly authService;
    constructor(catsService: CatsService, authService: AuthService);
    signUp(body: CatRequestDto): Promise<{
        id: string;
        emial: string;
        name: string;
        imageUrl: string;
    }>;
    logIn(body: LoginRequestDto): Promise<{
        token: string;
    }>;
    getCurrentCat(cat: any): any;
    uploadCatImgs(files: Array<Express.Multer.File>, cat: any): Promise<{
        id: string;
        emial: string;
        name: string;
        imageUrl: string;
    }>;
    getAllCats(): Promise<{
        id: string;
        emial: string;
        name: string;
        imageUrl: string;
    }[]>;
}
