import { Prop, Schema, SchemaFactory  } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema()
export class Doctor extends Document {
    @Prop()
    readonly name: string;

    @Prop()
    readonly  email: string;

    @Prop()
    readonly password: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);