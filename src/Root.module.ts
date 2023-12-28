import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  imports: [     
    MongooseModule.forRoot('mongodb://localhost/nest-mongodb-crud'),
    DoctorsModule,
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
