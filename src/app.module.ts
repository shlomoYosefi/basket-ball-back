import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/players/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from './entityes/player-entity';
import { GrupEntity } from './entityes/grup-entity';
import { Game } from './entityes/game';
import { StatisticByPlayer } from './entityes/statistic-by-player';
import { AuthService } from './services/auth/auth.service';
import { ChackTokenGuard } from './gurds/chack-token.guard';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      // url:"postgres://postgres:postgres@localhost:5433/basketBall",
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'basketBall',
      logging:false,
      entities: [PlayerEntity,GrupEntity,Game,StatisticByPlayer],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'client'),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(){
    console.log("gggggggg",process.env.DATABASE_URL); 
    
  }
}
