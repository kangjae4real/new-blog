import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth')
export class AuthEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  accessToken: string;

  @Column('varchar')
  refreshToken: string;
}
