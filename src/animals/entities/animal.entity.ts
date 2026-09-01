import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('animals')
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  especie: string;

  @Column()
  raza: string;

  @Column()
  edad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  peso: number;
}