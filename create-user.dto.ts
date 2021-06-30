import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator"

export class CreateUserDto {
	@MaxLength(100)
	@IsString()
	@IsNotEmpty()
    name:string

	@MaxLength(100)
	@IsString()
	@IsNotEmpty()
	lastname:string

	@MaxLength(3)
	@IsString()
	@IsNotEmpty()
	age: string
}
