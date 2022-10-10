import { AwsService } from './../aws.service';
import { CatsRepository } from './cats.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatSchema } from './cats.schema';
import { CatRequestDto } from './dto/cats.request.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CatsService {
    
    constructor(
        private readonly catsRepository: CatsRepository,
        private readonly awsService: AwsService
    ) {}
    
    async signUp(body: CatRequestDto) {
        const {email, name, password} = body;
        const isCatExist = await this.catsRepository.existsByEmail(email);
        console.log(isCatExist)
        if (isCatExist) {
            throw new UnauthorizedException('해당하는 고양이는 이미 존재합니다.');
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const cat = await this.catsRepository.create({ email, name, password: hashedPassword});
        return cat.readOnlyData;
    }

    async uploadImg(cat: Cat, files: Express.Multer.File[]) {
        const folderName = 'cats'
        const file = files[0];
        const {key, s3Object, contentType} = await this.awsService.uploadFileToS3(folderName, file);
        const imageUrl = await this.awsService.getAwsS3FileUrl(key);
        const newCat = await this.catsRepository.findByIdAndUpdateImg(cat.id, imageUrl);
        return newCat.readOnlyData;
    }

    async getAllCats() {
        const allCats = await this.catsRepository.findAll();
        return allCats.map((cat) => cat.readOnlyData);
    }
}
