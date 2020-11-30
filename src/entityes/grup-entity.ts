import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { PlayerEntity } from "./player-entity";

@Entity('grups')
export class GrupEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    NameGrup: string;
  
    @Column()
    password: string;
  
    // @OneToMany(()=> PlayerEntity,player => player.id)
    // players:PlayerEntity[]
    
   
}
