import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Doctor, DoctorSchema } from '../doctor-schema/doctor-schema'

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest-mongodb-crud')
            ],
})
export class MongodbModule {}
