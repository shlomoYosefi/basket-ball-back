import { IsString } from 'class-validator'

export class grupDto {

    @IsString()
    NameGrup:string

    @IsString()
    Password:string
}