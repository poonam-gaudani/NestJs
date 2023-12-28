import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { DoctorService } from '../services/doctor.service';
import { PasswordService } from '../services/password.service';
import { AuthService } from '../services/auth.service';
import { DoctorController } from '../controllers/doctors.controller';
import { authController } from '../controllers/auth.controller';
import { isRegistered } from '../middlewares/doctor.middleware'
import { MongooseModule } from '@nestjs/mongoose';
import { Doctor, DoctorSchema } from '../doctor-schema/doctor-schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Doctor.name, schema: DoctorSchema }])
  ],
  controllers: [DoctorController, authController],
  providers: [DoctorService, PasswordService, AuthService],
  exports: [PasswordService, DoctorService, AuthService]
})
export class DoctorsModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(isRegistered).forRoutes('doctor');
  }
}
