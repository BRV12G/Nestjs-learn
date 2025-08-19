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

export class UpdateUserDto {
      @IsNumber()
      @IsOptional()
      id: number;

      @IsString()
      @IsNotEmpty()
      @MinLength(3)
      @IsOptional()
      name: string;

      @IsEmail()
      @IsNotEmpty()
      @IsLowercase()
      @IsOptional()
      email: string;

      @IsOptional()
      @IsString()
      @IsNotEmpty()
      gender: string;

      @IsOptional()
      @IsBoolean()
      isMarried: boolean;
}
