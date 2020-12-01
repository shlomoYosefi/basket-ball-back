import { Injectable } from '@nestjs/common';
import { GameRepository } from 'src/repositorys/game-repository';
import { StatisticByPlayerRepository } from 'src/repositorys/statistic-by-player-repository';
import { GameDto } from 'src/DTO/game-dto';
import { StatisticByPlayerDto } from 'src/DTO/statisticByPlayer-dto';
import { PlayerRepository } from 'src/repositorys/player-repository';

@Injectable()
export class ResultsService {

    constructor(private gameRepository:GameRepository, private statisticRepository:StatisticByPlayerRepository){}


    saveGame(game:GameDto){
       return this.gameRepository.saveGame(game)
    }

    saveStatistic(statistic:StatisticByPlayerDto){
        this.statisticRepository.saveStatistic(statistic)
    }

    getAllResult(id){
        console.log(id);
        
        return this.statisticRepository.getAllResult(id)
    }

    getResultByGrup(){
        return this.gameRepository.getResultByGrup()
    }

    getResultByDate(date){
        return this.gameRepository.getResultByDate(date)
    }


    getstatisticByDate(games){
        return this.statisticRepository.getstatisticByDate(games)
    }

    getStatisticByPlayer(id){
        return this.statisticRepository.getStatisticByPlayer(id)
    }
}
