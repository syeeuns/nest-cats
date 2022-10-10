import { Types } from 'mongoose';
import { CatRequestDto } from './dto/cats.request.dto';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
export declare class CatsRepository {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    findAll(): Promise<Cat[]>;
    findByEmail(email: string): Promise<Cat | null>;
    findByIdWithoutPassword(id: string | Types.ObjectId): Promise<Cat | null>;
    existsByEmail(email: string): Promise<boolean>;
    create(cat: CatRequestDto): Promise<Cat>;
    findByIdAndUpdateImg(id: any, imangeUrl: string): Promise<Cat>;
}
