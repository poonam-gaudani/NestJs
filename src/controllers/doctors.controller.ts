import { Get, Post, Put, Controller, Delete, Param, Query, Body, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { DoctorService } from '../services/doctor.service';
import { doctorDto } from '../dto/doctors.dto';
import { Doctor } from '../doctor-schema/doctor-schema';

@Controller('Doctor')
export class DoctorController {
    constructor (private DoctorService: DoctorService) {}

    @Post("/add_doctor")
    async addDoctor (@Body(new ValidationPipe()) createDocDto: doctorDto) : Promise <Doctor> {
        return await this.DoctorService.addDoctors(createDocDto);
    }

    @Put("/doctor/:id")
    async updateDoctor (@Body(new ValidationPipe()) createDocDto: doctorDto, @Param('id') doctorId: String) : Promise<Doctor> {
        return await this.DoctorService.updateDoctors(createDocDto, doctorId);
    }

    @Delete("/doctor/:id")
    async removeDoctor (@Param("id") doctorId: String) : Promise<String> {  
        return await this.DoctorService.deleteDoctors(doctorId);
    }

    @Get("/doctor")
    async getDoctor () : Promise<Doctor[]> {
        return await this.DoctorService.getDoctors();
    }
}