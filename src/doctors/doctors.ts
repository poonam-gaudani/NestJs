import { Injectable } from '@nestjs/common';

import { DoctorInterface } from './doctors.interface';

@Injectable()
export class Doctors {
    addDoctors(Doctor : DoctorInterface) : String {
        return "Doctor details has been added successfully.";
    }

    getDoctors() : String {
        return "Doctor details has been fetch successfully.";
    }

    updateDoctors() : String {
        return "Doctor details has been updated successfully.";
    }

    deleteDoctors() : String {
        return "Doctor details has been deleted successfully.";
    }
}
