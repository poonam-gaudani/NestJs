import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { DoctorService } from '../services/doctor.service';
import { DoctorController } from '../controllers/doctors.controller';
import { isRegistered } from '../middlewares/doctor.middleware'
import { MongooseModule } from '@nestjs/mongoose';
import { Doctor, DoctorSchema } from '../doctor-schema/doctor-schema'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-mongodb-crud'),
    MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }])
  ],
  controllers: [DoctorController],
  providers: [DoctorService]
})
export class DoctorsModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(isRegistered).forRoutes('doctor');
  }
}
