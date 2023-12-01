import { IsString, IsInt, IsEmail, MinLength, Max, IsOptional, Matches } from "class-validator"

export class doctorDto{
    @IsInt()
    id: number;
 
    @IsString() @MinLength(1, {
        message: `name must $value of $property $constraint1`
    }) @Max(3, {
        message: `name must $value of $property $constraint1`
    })
    @IsOptional()
    @Matches(/^[a-zA-Z0-9]+$/, { message: 'Invalid name format' })
    name: String;

    @IsString() @IsEmail()
    email: String;
}