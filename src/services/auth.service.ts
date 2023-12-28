import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Doctor } from "../doctor-schema/doctor-schema"
import { PasswordService } from '../services/password.service';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Doctor.name) private readonly doctorModel: Model<Doctor>,
        private PasswordService: PasswordService,
        ) {}

    async validateUser(email: String, password: String) : Promise <Doctor>{
        const hasUser = await this.doctorModel.findOne({ email  }).select('name email password').lean();
        if (!hasUser) throw new UnauthorizedException("Please enter registered email and password.");

        const hashPassword = hasUser.password;

        const res = await this.PasswordService.compareHash(password, hashPassword);
        if (!res) throw new UnauthorizedException("Please enter valid password.")

        return hasUser;
    }
}