import { Injectable } from '@nestjs/common';
import { grupDto } from 'src/DTO/grup-dto';
import { playerDto } from 'src/DTO/player-dto';
import { PlayerRepository } from 'src/repositorys/player-repository';
import { GrupRepository } from 'src/repositorys/grup-repository';
import { PlayerEntity } from 'src/entityes/player-entity';

@Injectable()
export class PlayersService {

    constructor(private playerRepository:PlayerRepository,private grupReposetory:GrupRepository){

    }

    

    addGrup(grup:grupDto){
        return this.grupReposetory.addGrup(grup)

    }

    addPlayer(player:playerDto){
       return this.playerRepository.addPlayer(player)
    }

    getPlayers(idGrup):Promise<PlayerEntity[]>{
        console.log(idGrup);
        
       return this.playerRepository.getPlayers(idGrup)
    }

    deletePlayer(id):void{
        this.playerRepository.deletePlayer(id)
    }

    


    
}
