import { Controller, Get, Post, UseInterceptors, UploadedFile, Res, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer'
import { from } from 'rxjs';
import path, { join } from 'path'


export const storage={
  
  storage:diskStorage({
    destination:'./uploads/images',
    filename:(req,file,cb )=>{
      console.log(req['headers']['id']);
      
      console.log('storage',file)
      
      const filename = `${req['headers']['id']}.jpg`
      cb(null,`${filename}`)
    }
  })
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('upload')
  @UseInterceptors(FileInterceptor('image',storage))
  upload(@UploadedFile() file){  
  }


  @Get('getFile/:id')
  getfile(@Param('id') id , @Res() res:any){
    return res.sendFile(join(process.cwd(),`uploads/images/${id}.jpg`))
  }
}
