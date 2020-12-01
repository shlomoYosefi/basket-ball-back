import { Module } from '@nestjs/common';
import { PlayrsController } from 'src/controllers/playrs/playrs.controller';
import { PlayersService } from 'src/services/players/players.service';
import { ResultsService } from 'src/services/results/results.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerRepository } from 'src/repositorys/player-repository';
import { GrupRepository } from 'src/repositorys/grup-repository';
import { StatisticByPlayerRepository } from 'src/repositorys/statistic-by-player-repository';
import { GameRepository } from 'src/repositorys/game-repository';
import { ResultsController } from 'src/controllers/results/results.controller';
import {  JwtModule, JwtService } from '@nestjs/jwt'
import { from } from 'rxjs';
import { AuthService } from 'src/services/auth/auth.service';
import { ChackTokenGuard } from 'src/gurds/chack-token.guard';

@Module({
    imports:[TypeOrmModule.forFeature([PlayerRepository,GrupRepository,GameRepository,StatisticByPlayerRepository
    ]),
      JwtModule.register({secret:"shlomo" , signOptions:{expiresIn:'10000s'}})
    ],
    controllers:[PlayrsController,ResultsController],
    providers:[PlayersService, ResultsService , AuthService]
    
})
export class UsersModule {}
