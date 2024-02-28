import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
//   UseGuards,
//   UploadedFile,
//   UseInterceptors,
//   ParseFilePipe,
//   FileTypeValidator,
//   MaxFileSizeValidator,
// } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post()
  async createUser(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.usersService.createUser(username, password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllUsers() {
    return this.usersService.getUsers();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getMe(@Param() params) {
    return this.usersService.getMe(params.id);
  }

  // @UseGuards(AuthGuard('jwt'))
  // @Post(':id/upload')
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadAvatar(
  //   @UploadedFile(
  //     new ParseFilePipe({
  //       validators: [
  //         new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
  //         new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
  //       ],
  //     }),
  //   )
  //   file: Express.Multer.File,
  //   @Param() params,
  // ) {
  //   return this.userService.uploadAvatar(file, params.id);
  // }
}
