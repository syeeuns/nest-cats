import { HttpException, UnauthorizedException } from '@nestjs/common';
import { CatsRepository } from './../cats/cats.repository';
import { Injectable } from '@nestjs/common';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly catsRepository: CatsRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(body: LoginRequestDto) {
    const { email, password } = body;

    const cat = await this.catsRepository.findByEmail(email);
    if (!cat) {
      throw new UnauthorizedException('해당하는 cat이 없습니다.');
    }

    const isValidPassword = await bcrypt.compare(password, cat.password);
    if (!isValidPassword) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
    }

    const payload = { email, sub: cat.id };
    return { token: this.jwtService.sign(payload) };
  }
}
