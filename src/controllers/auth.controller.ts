import { Get, Post, Put, Controller, Body, ValidationPipe, UseGuards } from '@nestjs/common';
import { DoctorService } from '../services/doctor.service';
import { PasswordService } from '../services/password.service';
import { AuthService } from '../services/auth.service';
import { doctorDto } from '../dto/doctors.dto';
import { Doctor } from '../doctor-schema/doctor-schema';


@Controller('auth')
export class authController {
    constructor (
        private AuthService: AuthService
    ) {}

    @Post("/login")
    async login (@Body ("email") email : String, @Body ("password") password: String) : Promise <Doctor> {
        const hasUser = await this.AuthService.validateUser(email, password);
        if (hasUser) return hasUser;
    }
}