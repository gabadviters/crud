import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { db } from 'src/database/tasks';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDto) {
    const ranId = randomUUID();
    const newTask = { id: ranId, ...createTaskDto };
    console.log(newTask);

    return db.push(newTask);
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    const task = db.find((tarea) => tarea.id == id);

    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const index = db.findIndex((task) => task.id === id);

    return (db[index] = { ...db[index], ...updateTaskDto });
  }

  remove(id: number) {
    const index = db.findIndex((task) => task.id === id);

    return db.splice(index, 1);
  }
}
