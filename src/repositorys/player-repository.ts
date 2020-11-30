import { EntityRepository, Repository } from "typeorm";
import { playerDto } from "src/DTO/player-dto";
import { grupDto } from "src/DTO/grup-dto";
import { PlayerEntity } from "src/entityes/player-entity";


@EntityRepository(PlayerEntity)
export class PlayerRepository extends Repository<PlayerEntity> {

   

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

    

    deletePlayer(id):void{
        this.delete(id)
    }

}
