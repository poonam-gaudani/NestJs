import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Doctors } from './doctors';
import { DoctorController } from './doctors.controller';
import { isRegistered } from './doctor.middleware';

@Module({
  providers: [Doctors],
  controllers: [DoctorController]
})
export class DoctorsModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(isRegistered).forRoutes('doctor');
  }
}
