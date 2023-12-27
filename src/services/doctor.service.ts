import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { doctorDto } from '../dto/doctors.dto'
import { Doctor, DoctorSchema } from '../doctor-schema/doctor-schema'

@Injectable()
export class DoctorService {
    constructor(@InjectModel(Doctor.name) private readonly doctorModel: Model<Doctor>) {}

    async addDoctors(Doctor : doctorDto) : Promise<Doctor> {
        const newData = new this.doctorModel(Doctor);
        const result = await newData.save();
        return result;
    }

    async getDoctors() : Promise<Doctor[]> {
        const newData = await this.doctorModel.find();
        return newData;
    }

    async updateDoctors(Doctor : doctorDto, doctorId: String) : Promise<Doctor> {
        const hasDoctors = await this.doctorModel.findByIdAndUpdate(doctorId, Doctor, { new: true });
        return hasDoctors;
    }

    async deleteDoctors(doctorId: String) : Promise<String> {
        const hasRemoved = await this.doctorModel.findByIdAndDelete(doctorId);
        if (hasRemoved) return "Doctor details has been deleted successfully.";
    }
}
