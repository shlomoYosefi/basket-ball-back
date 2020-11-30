import { GrupEntity } from "src/entityes/grup-entity";
import { EntityRepository, Repository } from "typeorm";
import { grupDto } from "src/DTO/grup-dto";
import { ForbiddenException } from "@nestjs/common";

@EntityRepository(GrupEntity)
export class GrupRepository extends Repository<GrupEntity> {

   async chackGrup(grup:grupDto){
        const {NameGrup,Password} = grup
        const newGrup:GrupEntity = new GrupEntity()
        newGrup.NameGrup = NameGrup
        newGrup.password = Password
        const arrGrups =await this.findOne({NameGrup,password:Password})
        
        if (arrGrups){ 
            return arrGrups
        }
        else{
            return false
        // throw new ForbiddenException('wrong username or password')
        }
        
    }

    async addGrup(grup:grupDto){

        const {NameGrup,Password} = grup
        const name = await this.findOne({NameGrup})
        if(name){
            return false
        }

        const newGrup:GrupEntity = new GrupEntity()
        newGrup.NameGrup = NameGrup
        newGrup.password = Password
        newGrup.save()
        return true
    }


    
}
