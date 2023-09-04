import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Task, TaskDocument } from "./schemas/task.schema";
import { Model } from "mongoose";
import { CreateTaskDto } from "./dtos/create-task.dto";
import { UpdateTaskDto } from "./dtos/update-task.dto";

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>) {
    }

    async getAllTask() {
        return await this.taskModel.find().exec();
    }

    async create(createTaskDto: CreateTaskDto) {
        return await new this.taskModel({
            ...createTaskDto,
            createdAt: new Date()
        }).save();
    }

    async getTask(id: string) {
        return await this.taskModel.findById(id).exec();
    }

    async updateTask(id: string, updateDto: UpdateTaskDto) {
        return await this.taskModel.findByIdAndUpdate(id, updateDto).exec();
    }

    async deleteTask(id: string) {
        return await this.taskModel.findByIdAndDelete(id);
    }
}