import { IsString, IsNumber } from 'class-validator'
import { OneToMany } from 'typeorm'
import { Game } from 'src/entityes/game'


export class playerDto {

    @IsString()
    Name:string
    
    @IsString()
    Height:string

    @IsString()
    Image:string

    @IsString()
    Position:string

    @IsNumber()
    GrupId:number

}