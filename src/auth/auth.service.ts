import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/interfaces/user.interfaces';
import { UsersService } from '../users/users.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  create(createAuthDto: CreateAuthDto) {
    console.log('createAuthDto => ', createAuthDto);
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    console.log('updateAuthDto => ', updateAuthDto);
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async validateUserCredentials(
    username: string,
    password: string,
  ): Promise<any> {
    console.log(username, password);
    const user = await this.usersService.getUser({ username, password });

    return user ?? null;
  }

  async loginWithCredentials(user: User) {
    const payload = { username: user.username };

    return {
      username: user.username,
      userId: user._id,
      avatar: user.avatar,
      access_token: this.jwtService.sign(payload),
      expiredAt: Date.now() + 60000,
    };
  }
}
