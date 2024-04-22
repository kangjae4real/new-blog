import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcryptjs from 'bcryptjs';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Column({ type: 'timestamp' })
  createdAt: string;

  @Column({ type: 'timestamp', default: null })
  updatedAt: string;

  @Column({ type: 'timestamp', default: null })
  deletedAt: string;

  @BeforeInsert()
  private async insertPassword() {
    const salt = bcryptjs.genSaltSync(10);
    this.password = bcryptjs.hashSync(this.password, salt);
  }
}
