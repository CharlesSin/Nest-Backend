import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './interfaces/projects.interface';

@Injectable()
export class ProjectsService {
  constructor(
    @Inject('PROJECT_MODEL') private readonly projectModel: Model<Project>,
  ) {}

  async create(createCatDto: CreateProjectDto): Promise<Project> {
    const createdProject = this.projectModel.create(createCatDto);
    return createdProject;
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    console.log(updateProjectDto);
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
