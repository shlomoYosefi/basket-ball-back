import { IsString, IsNumber } from 'class-validator'

export class StatisticByPlayerDto{

    @IsNumber()
    idPlayer: number;

    @IsNumber()
    idGame: number;

    @IsNumber()
    idGrup: number;

    @IsNumber()
    to2: number;

    @IsNumber()
    to3: number;

    @IsNumber()
    ok2: number;

    @IsNumber()
    ok3: number;

    @IsNumber()
    percent2: number;

    @IsNumber()
    percent3: number;

    @IsNumber()
    points: number;
    }