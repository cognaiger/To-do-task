import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dtos/create-task.dto";
import { UpdateTaskDto } from "./dtos/update-task.dto";

@Controller("task")
export class TaskController {
    constructor(private readonly taskService: TaskService) {

    }

    @Get()
    async getAllTask() {
        return await this.taskService.getAllTask();
    }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
        return await this.taskService.create(createTaskDto);
    }

    @Get(":id")
    async getTask(@Param('id') id: string) {
        return await this.taskService.getTask(id);
    }

    @Put(":id")
    async updateTask(@Param('id') id: string, @Body() updateDto: UpdateTaskDto) {
        return await this.taskService.updateTask(id, updateDto);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string) {
        return await this.taskService.deleteTask(id);
    }

}
