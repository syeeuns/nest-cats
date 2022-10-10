import { AwsService } from './../aws.service';
import { AuthModule } from './../auth/auth.module';
import { CatsRepository } from './cats.repository';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { Cat, CatSchema } from './cats.schema';
import { CatsService } from './cats.service';
import { MulterModule } from '@nestjs/platform-express';
import { Comment, CommentSchema } from 'src/comments/comments.schema';
import * as multer from 'multer';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema },
      { name: Comment.name, schema: CommentSchema }
    ]),
    forwardRef(() => AuthModule),
    MulterModule.register({
      dest: './upload',
      storage: multer.memoryStorage()
    })
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository, AwsService],
  exports: [CatsService, CatsRepository]
})
export class CatsModule {}
