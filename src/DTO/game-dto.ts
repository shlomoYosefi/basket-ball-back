import { IsString, IsNumber } from 'class-validator'
import { OneToMany } from 'typeorm';
import { PlayerRepository } from 'src/repositorys/player-repository';

export class GameDto{

    @IsNumber()
    idGrup: number;

    @IsString()
    date: string;
    
    @IsString()
    time: string;

    @IsNumber()
    G1P1: number;

    @IsNumber()
    G1P2: number;

    @IsNumber()
    G1P3: number;

    @IsNumber()
    G2P1: number;

    @IsNumber()
    G2P2: number;

    @IsNumber()
    G2P3: number;

    @IsNumber()
    resultG1: number;

    @IsNumber()
    resultG2: number;
    }

 