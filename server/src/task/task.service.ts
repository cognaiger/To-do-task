import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Task, TaskDocument } from "./schemas/task.schema";
import { Model } from "mongoose";
import { CreateTaskDto } from "./dtos/create-task.dto";

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>) {

    }

    async getAllTask() {

    }

    async create(createTaskDto: CreateTaskDto) {
        return await new this.taskModel({
            ...createTaskDto,
            createdAt: new Date()
        }).save();
    }

    async getTask(id: string) {

    }
}