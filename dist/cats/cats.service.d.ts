/// <reference types="multer" />
import { AwsService } from './../aws.service';
import { CatsRepository } from './cats.repository';
import { Cat } from './cats.schema';
import { CatRequestDto } from './dto/cats.request.dto';
export declare class CatsService {
    private readonly catsRepository;
    private readonly awsService;
    constructor(catsRepository: CatsRepository, awsService: AwsService);
    signUp(body: CatRequestDto): Promise<{
        id: string;
        emial: string;
        name: string;
        imageUrl: string;
    }>;
    uploadImg(cat: Cat, files: Express.Multer.File[]): Promise<{
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
