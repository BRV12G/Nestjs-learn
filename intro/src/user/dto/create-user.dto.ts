import {
  IsEmail,
  IsLowercase,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBoolean,
  MinLength,
  IsNumber,
} from "class-validator";

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString({ message: "Name must be a string" })
  @IsNotEmpty({ message: "Name is required" })
  @MinLength(3, { message: "Name must be at least 3 characters long" })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: "Email is required" })
  @IsLowercase({ message: "Email must be in lowercase" })
  email: string;

  @IsOptional({ message: "Gender is optional" })
  @IsString({ message: "Gender must be a string" })
  @IsNotEmpty({ message: "Gender is required" })
  gender: string;

  @IsOptional({ message: "IsMarried is optional" })
  @IsBoolean({ message: "IsMarried must be a boolean" })
  isMarried: boolean;
}
