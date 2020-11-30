import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { PlayerEntity } from "./player-entity";


@Entity()
export class StatisticByPlayer extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
  
    // @Column()
    @ManyToOne(()=> PlayerEntity,player=> player.id)
    idplayer: number;
  
    @Column()
    id_game: number;

    @Column()
    id_grup: number;

    @Column()
    to2: number;
  
    @Column()
    to3: number;

    @Column()
    ok2: number;
  
    @Column()
    ok3: number;

    @Column()
    percent2: number;
  
    @Column()
    percent3: number;

    @Column()
    points: number;

   
}
