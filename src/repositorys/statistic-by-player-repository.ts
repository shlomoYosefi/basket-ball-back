import { EntityRepository, Repository, getConnection } from "typeorm";
import { StatisticByPlayer } from "src/entityes/statistic-by-player";
import { StatisticByPlayerDto } from "src/DTO/statisticByPlayer-dto";
import { Game } from "src/entityes/game";
import { GrupRepository } from "./grup-repository";
import { PlayerRepository } from "./player-repository";
import { GameRepository } from "./game-repository";
import { PlayerEntity } from "src/entityes/player-entity";
import { groupBy } from "rxjs/internal/operators/groupBy";

@EntityRepository(StatisticByPlayer)
export class StatisticByPlayerRepository extends Repository<StatisticByPlayer> {

    

    saveStatistic(statistic: StatisticByPlayerDto) {
        const { idPlayer, idGame, to2, to3, ok2, ok3, percent2, percent3, points, idGrup } = statistic        
        const newStatistic = new StatisticByPlayer()
        newStatistic.id_grup = idGrup
        newStatistic.idplayer = idPlayer
        newStatistic.id_game = idGame
        newStatistic.to2 = to2
        newStatistic.to3 = to3
        newStatistic.ok2 = ok2
        newStatistic.ok3 = ok3
        newStatistic.percent2 = percent2
        newStatistic.percent3 = percent3
        newStatistic.points = points
        newStatistic.save()


    }

    async getAllResult(idGrup) {



        // const arrResult = await this.find({ "idgrup": idGrup })


        // const play = await this.query(
        // `SELECT *
        // FROM statistic_by_player as statistic
        // WHERE statistic.idgrup = ${idGrup}
        // JOIN players as play
        // ON statistic.idplayerId = play.id;`);

        // 'SELECT *
        // FROM shpping_cart as shp
        // JOIN img_list_by_subject as imgs
        // ON shp.img_id = imgs.id
        // WHERE user_id = ${ userId } `);'

        // console.log(play);


        const players = await this
            .createQueryBuilder("statistic_by_player")
            .where(`statistic_by_player.id_grup = ${idGrup}`)
            // .leftJoinAndSelect("players", "player","statistic_by_player.idplayerId = player.id")
            .leftJoinAndMapMany("statistic_by_player.players","players", "player","statistic_by_player.idplayerId = player.id")
            .leftJoinAndMapMany("statistic_by_player.game","game","game",` statistic_by_player.id_game = game.id`)
            .getMany()            
        return players
    }


   async getstatisticByDate(games){
        let arrResultgames =[]
        let arrstatistic =[]
        for (let i of games['games']){
            let game = await this.find({id_game:i})
            arrResultgames.push(game)
        }

        for (let j of arrResultgames){
            for(let r of j){
            let play =  await this.createQueryBuilder("statistic_by_player")
            .where(`statistic_by_player.id = ${r.id}`)
            // .leftJoinAndSelect("players", "player","statistic_by_player.idplayerId = player.id")
            .leftJoinAndMapMany("statistic_by_player.players","players", "player","statistic_by_player.idplayerId = player.id")
            .leftJoinAndMapMany("statistic_by_player.game","game","game",` statistic_by_player.id_game = game.id`)
            .getMany()
            
                for(let y of play){
                    arrstatistic.push(y)
                }
            }
        }        
        return arrstatistic;
        
    }


    async getStatisticByPlayer(id){
        const result = await this.find({idplayer:id}) 
        return result
    }
}
