import { EntityRepository, Repository } from "typeorm";
import { Game } from "src/entityes/game";
import { GameDto } from "src/DTO/game-dto";
import { StatisticByPlayerDto } from "src/DTO/statisticByPlayer-dto";

@EntityRepository(Game)
export class GameRepository extends Repository<Game> {


    async saveGame(game:GameDto){

        const {idGrup,date,time,G1P1,G1P2,G1P3,G2P1,G2P2,G2P3,resultG1,resultG2} = game
        const newGame = new Game()
        
        newGame.id_grup = idGrup
        newGame.date = date
        newGame.time = time
        newGame.g1_p1 = G1P1
        newGame.g1_p2 = G1P2
        newGame.g1_p3 = G1P3
        newGame.g2_p1 = G2P1
        newGame.g2_p2 = G2P2
        newGame.g2_p3 = G2P3
        newGame.result_g1 = resultG1
        newGame.result_g2 = resultG2        
        await newGame.save()

        const games  = await this.find()
        return games[games.length-1].id     
    }


    async getResultByGrup(){
        const allResult = await this.find()
        return allResult
    }

    async getResultByDate(date){
        const allResult = await this.find({id_grup:date['grup'],date:date['date']})
        let result = Object.entries(allResult)        
        if(!result[0]){            
            return false
        }
        return allResult;
        
    }

}
