import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { classToPlain } from 'class-transformer';
import { LoginDto } from './dto/LoginDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login({ username, password }: LoginDto): Promise<User> {
    console.log({ username, password });
    const user = await this.usersService.findByUsername(username);
    console.log(bcrypt.hashSync(password, 1));
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException();
    }
    delete user.password;
    return user;
  }

  async signUserJWT(user: User) {
    const payload = classToPlain(user);
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
