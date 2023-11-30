import { Module } from '@nestjs/common';
import { Doctors } from './doctors';
import { DoctorController } from './doctors.controller';

@Module({
  providers: [Doctors],
  controllers: [DoctorController]
})
export class DoctorsModule {}
