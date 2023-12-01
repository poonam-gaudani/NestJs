import { Get, Post, Put, Controller, Delete, Param, Query, Body, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Doctors } from './doctors';
import { DoctorInterface } from './doctors.interface';
import { doctorDto } from './doctors.dto';

@Controller('Doctor')
export class DoctorController {
    constructor (private DoctorService: Doctors) {}


    @Post("/add_doctor")
    addDoctor (@Body(new ValidationPipe()) createDocDto: doctorDto) : String {
        return this.DoctorService.addDoctors(createDocDto);
    }

    @Put("/doctor")
    updateDoctor () : String {
        return this.DoctorService.updateDoctors();
    }

    @Delete("/doctor/:id")
    removeDoctor (@Param('id', ParseIntPipe) param , @Query() query) : String {  
        return this.DoctorService.deleteDoctors();
    }

    @Get("/doctor")
    getDoctor () : String {
        return this.DoctorService.getDoctors();
    }
}