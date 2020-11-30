import { Controller, Post, Body, Get, Param, ValidationPipe, UseGuards } from '@nestjs/common';
import { Game } from 'src/entityes/game';
import { ResultsService } from 'src/services/results/results.service';
import { StatisticByPlayerDto } from 'src/DTO/statisticByPlayer-dto';
import { GameDto } from 'src/DTO/game-dto';
import { ChackTokenGuard } from 'src/gurds/chack-token.guard';

@Controller('results')
export class ResultsController {

    constructor(private srvResults:ResultsService){}


    // @UseGuards(ChackTokenGuard)
    @Post('saveGame')
    saveGame(@Body(ValidationPipe) game:GameDto){
        return this.srvResults.saveGame(game)    
    }


    // @UseGuards(ChackTokenGuard)
    @Post('saveStatistic')
    saveStatistic(@Body(ValidationPipe) statistic:StatisticByPlayerDto){                
        this.srvResults.saveStatistic(statistic)
    }


    // @UseGuards(ChackTokenGuard)
    @Get('getAllResult/:id')
    getAllResult(@Param('id',ValidationPipe) id:number){        
        return this.srvResults.getAllResult(id)
    }


    // @UseGuards(ChackTokenGuard)
    @Get('getResultByGrup')
    getResultByGrup(){
       return this.srvResults.getResultByGrup()
    }


    // @UseGuards(ChackTokenGuard)
    @Post('getResultByDate')
    getResultByDate(@Body() date:string){        
       return this.srvResults.getResultByDate(date)
    }


    // @UseGuards(ChackTokenGuard)
    @Post('getstatisticByDate')
    getstatisticByDate(@Body() games:Body){
        return this.srvResults.getstatisticByDate(games)
    }


}
