import { Controller, Post, Body, Get, Param, Delete, UseInterceptors, ValidationPipe, Req, UseGuards, UploadedFile, Headers, Header } from '@nestjs/common';
import { PlayersService } from 'src/services/players/players.service';
import { grupDto } from 'src/DTO/grup-dto';
import { playerDto } from 'src/DTO/player-dto';
import { PlayerEntity } from 'src/entityes/player-entity';
import { Game } from 'src/entityes/game';

import { FileInterceptor} from '@nestjs/platform-express' ;
import {diskStorage} from 'multer' ;
import { AuthService } from 'src/services/auth/auth.service';
import { ChackTokenGuard } from 'src/gurds/chack-token.guard';
import { parse } from 'path';

const config = {storage: diskStorage({
   destination: './images/profileImages',
   filename: (req, file, cb) =>{
      console.log("plplp");
      
      const fileName = req.params['user_email'] ;
      const extension = parse(file.originalname).ext ;
      cb(null,`${fileName}${extension}`) ;
  }
})}




@Controller('playrs')
export class PlayrsController {
    
    constructor(private srvPlayer:PlayersService,private srvAuth:AuthService){}

    @Post('logIn')
    logIn(@Body(ValidationPipe) grup:grupDto){        
       return this.srvAuth.chackGrup(grup)
    }

    @Post('addGrup')
    addGrup(@Body(ValidationPipe) body:grupDto){        
        return this.srvPlayer.addGrup(body)      
    }

    @UseGuards(ChackTokenGuard)
    @Post('addPlayer/')
    addPlayer(@Body(ValidationPipe) body:playerDto){     
       console.log("shlomo");
         
       return this.srvPlayer.addPlayer(body)
    }

    @UseGuards(ChackTokenGuard)
    @Get('getPlayers/:id')
    getPlayers(@Param('id',ValidationPipe) id):Promise<PlayerEntity[]>{ 
       console.log(id);
       
       return this.srvPlayer.getPlayers(id);            
    }
 

    @UseGuards(ChackTokenGuard)
    @Delete('deletePlayer/:id')
    deletePlayer(@Param('id',ValidationPipe) id):void{
      this.srvPlayer.deletePlayer(id)
    }

 
    @Post('uploadImage') 
    @UseInterceptors(FileInterceptor('image', config))
    uploadImage(@UploadedFile() profile_image){
      //  this.srvPlayer.uploadImage(image)
    }  


    
}
