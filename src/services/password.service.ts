import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class PasswordService {
    async hashPassword(password: String): Promise<String> {
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        return hashPassword;
    }

    async compareHash (plainTextPass: String, hashPassword: String) {
        return bcrypt.compareHash(plainTextPass, hashPassword);
    }
}