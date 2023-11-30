import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';

import { Doctors } from './doctors/doctors';

@Module({
  imports: [ DoctorsModule ],
  controllers: [],
  providers: [Doctors],
})
export class RootModule {}
