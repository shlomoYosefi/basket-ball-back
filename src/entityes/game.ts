import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany } from "typeorm";
import { PlayerRepository } from "src/repositorys/player-repository";

@Entity()
export class Game extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    id_grup: number;
  
    @Column()
    date: string;

    @Column()
    time: string;
  
    @Column()
    g1_p1: number;

    @Column()
    g1_p2: number;
  
    @Column()
    g1_p3: number;

    @Column()
    g2_p1: number;
  
    @Column()
    g2_p2: number;

    @Column()
    g2_p3: number;
  
    @Column()
    result_g1: number;

    @Column()
    result_g2: number;
  
    // @ManyToMany(() => PlayerRepository)
    // players:PlayerRepository[]
}
