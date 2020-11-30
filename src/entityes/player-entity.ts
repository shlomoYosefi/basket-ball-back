import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany } from "typeorm";
import { GrupEntity } from "./grup-entity";
import { Game } from "./game";
import { StatisticByPlayer } from "./statistic-by-player";



@Entity('players')
export class PlayerEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    height: string;
  
    @Column()
    image: string;

    @Column()
    position: string;

    @Column()
    grup_id:number

    
    @OneToMany(()=> StatisticByPlayer,statistic => statistic.id)
    statistics:StatisticByPlayer[]
}
