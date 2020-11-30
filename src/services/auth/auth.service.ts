import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { grupDto } from 'src/DTO/grup-dto';
import { GrupRepository } from 'src/repositorys/grup-repository';

@Injectable()
export class AuthService {
    constructor(private jwt: JwtService, private grupRepository: GrupRepository) { }


    async chackGrup(grup: grupDto) {
        const { NameGrup  } = grup

        const thisGrup = await this.grupRepository.chackGrup(grup)
        
        if(thisGrup){
        const token = this.jwt.sign({ nameGrup: NameGrup ,id:thisGrup.id })
        return {token,NameGrup,id:thisGrup.id}
    }  
    else{
        return false
    }
}
}