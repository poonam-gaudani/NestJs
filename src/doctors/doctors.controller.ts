import { Get, Post, Put, Controller, Delete, Param, Query, Body } from '@nestjs/common';
import { Doctors } from './doctors';
import { DoctorInterface } from './doctors.interface';

@Controller('Doctor')
export class DoctorController {
    constructor (private DoctorService: Doctors) {}


    @Post("/add_doctor")
    addDoctor (@Body() createDocDto: DoctorInterface) : String {
        return this.DoctorService.addDoctors(createDocDto);
    }

    @Put("/doctor")
    updateDoctor () : String {
        return this.DoctorService.updateDoctors();
    }

    @Delete("/doctor/:id")
    removeDoctor (@Param() param, @Query() query) : String {  
        return this.DoctorService.deleteDoctors();
    }

    @Get("/doctor")
    getDoctor () : String {
        return this.DoctorService.getDoctors();
    }
}