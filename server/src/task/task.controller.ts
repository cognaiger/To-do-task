import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dtos/create-task.dto";

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
}
