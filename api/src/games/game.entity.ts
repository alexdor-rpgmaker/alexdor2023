import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'jeux'})
export class Game {
  @PrimaryGeneratedColumn({name: 'id_jeu'})
  id: number;

  @Column({name: 'nom_jeu'})
  title: string;

  @Column({name: 'description_jeu'})
  description: string;

  @Column({name: 'lien_sur_site'})
  fileName: string;

  @Column({name: 'id_session'})
  session: number;

  @Column({ default: true, name: 'avancement_jeu' })
  isComplete: boolean;
}
