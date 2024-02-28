import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interfaces';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    console.log('createUserDto => ', createUserDto);
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log('updateUserDto => ', updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async createUser(username: string, password: string): Promise<User> {
    const createdUser = this.userModel.create({
      username,
      password,
    });
    return createdUser;
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUser({ username, password }): Promise<User | undefined> {
    return this.userModel.findOne({
      username,
      password,
    });
  }

  async getMe(userId): Promise<User | undefined> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw 'User not found';
    }
    return user;
  }
}
