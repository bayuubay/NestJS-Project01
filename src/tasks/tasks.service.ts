import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Task, TaskStatus } from './task.model';
// import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAlltasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter(
  //       (task) =>
  //         task.title.includes(search) || task.description.includes(search),
  //     );
  //   }
  //   return tasks;
  // }
  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`task with ID  ${id}  not found`);
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto)
  }
  // getTaskById(id: string): Task {
  //   const found = this.tasks.find((task) => task.id == id);
  //   if (!found) {
  //     throw new NotFoundException(`task with ID  ${id}  not found`);
  //   }
  //   return found;
  // }

  async deleteTask(id:number ):Promise<void>{
   const result= await this.taskRepository.delete(id)
   if(result.affected===0){
    throw new NotFoundException(`task with ID  ${id}  not found`)
   }
  }

  // deleteTasks(id: string): void {
  //   const found = this.getTaskById(id);

  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }

  // updateTasks(id: string, status: TaskStatus) {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   // this.tasks.find((task) => task.id == id);
  //   return task;
  // }
}
