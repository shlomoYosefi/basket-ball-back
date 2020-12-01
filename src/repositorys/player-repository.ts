import { EntityRepository, Repository } from "typeorm";
import { playerDto } from "src/DTO/player-dto";
import { grupDto } from "src/DTO/grup-dto";
import { PlayerEntity } from "src/entityes/player-entity";
import { StatisticByPlayerRepository } from "./statistic-by-player-repository";


@EntityRepository(PlayerEntity)
export class PlayerRepository extends Repository<PlayerEntity> {
   
    constructor(private statisticRepository:StatisticByPlayerRepository ){
        super();
    }

   async addPlayer(player:playerDto){        
        const {Name,Height,Image,Position,GrupId} = player
        const newPlayer = new PlayerEntity()
        newPlayer.name = Name
        newPlayer.height = Height
        newPlayer.image = Image
        newPlayer.position = Position
        newPlayer.grup_id = GrupId
       await newPlayer.save()
    

    }

    async getPlayers(id):Promise<PlayerEntity[]>{
        const arrPlayers = await this.find({grup_id:id})
        return arrPlayers;      
    }

    

    async deletePlayer(id){
        // const result = await this.statisticRepository.getStatisticByPlayer(id)
        // console.log(result);
        
        this.delete(id)
    }

}
