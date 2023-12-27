import { IsString, IsInt, IsEmail, MinLength, Max, IsOptional, Matches, MaxLength } from "class-validator"

export class doctorDto{ 
    @IsString() @MinLength(1, {
        message: `name must $value of $property $constraint1`
    }) @MaxLength(30, {
        message: `name must $value of $property $constraint1`
    })
    @IsOptional()
    @Matches(/^[a-zA-Z0-9]+$/, { message: 'Invalid name format' })
    name: String;

    @IsString() @IsEmail()
    email: String;
}