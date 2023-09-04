import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
    @Prop({ required: true })
    title: string;

    @Prop()
    description?: string;

    @Prop({ required: true })
    createdAt: Date;

    @Prop()
    deletedAt?: Date;

    @Prop()
    completedAt?: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);