import { CatRequestDto } from './dto/cats.request.dto';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';

@Injectable()
export class CatsRepository {

    constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}
    
    async findAll() {
        const cats = await this.catModel.find();
        const readOnlyCats = cats.map((cat) => cat.readOnlyData);
        return readOnlyCats;
    }

    async findByEmail(email: string): Promise<Cat | null> {
        const cat = await this.catModel.findOne({ email });
        return cat;
    }
    
  async findByIdWithoutPassword(id: string): Promise<Cat | null> {
      const cat = await this.catModel.findById(id).select('-password');
      return cat;
    }
    
    async existsByEmail(email: string): Promise<boolean> {
        const result = await this.catModel.exists({ email });
        return !!result;
    }
    
    async create(cat: CatRequestDto): Promise<Cat> {
        const result = await this.catModel.create(cat);
        return result;
    }

    async findByIdAndUpdateImg(id: any, fileName: string): Promise<Cat> {
        const cat = await this.catModel.findById(id);
        cat.imageUrl = `http://localhost:3000/media/${fileName}`;
        return cat.save();
    }
}
