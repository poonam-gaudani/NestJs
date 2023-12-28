import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { DoctorService } from '../services/doctor.service';
import { PasswordService } from '../services/password.service';
import { DoctorController } from '../controllers/doctors.controller';
import { isRegistered } from '../middlewares/doctor.middleware'
import { MongooseModule } from '@nestjs/mongoose';
import { Doctor, DoctorSchema } from '../doctor-schema/doctor-schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }])
  ],
  controllers: [DoctorController],
  providers: [DoctorService, PasswordService],
  exports: [DoctorsModule]
})
export class DoctorsModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(isRegistered).forRoutes('doctor');
  }
}
