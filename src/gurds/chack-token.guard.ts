import { CanActivate, ExecutionContext, Injectable, ForbiddenException, Next } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/services/auth/auth.service';

@Injectable()
export class ChackTokenGuard implements CanActivate {

  constructor(private jwt:JwtService ){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    console.log("gurd");
    
    const request = context.switchToHttp().getRequest();
    const token = request['headers']["token"]        
  
try{
  const user = this.jwt.verify(token)    
  return true
}
      catch{
        throw new ForbiddenException("The attacker has passed")
      }
       
  }
}
