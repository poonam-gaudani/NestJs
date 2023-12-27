import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorsModule } from './doctors/doctors.module';

import { DoctorService } from './services/doctor.service';

@Module({
  imports: [     
    DoctorsModule
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
