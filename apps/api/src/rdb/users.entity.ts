import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
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

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp', default: null, nullable: true })
  updatedAt: string;

  @DeleteDateColumn({ type: 'timestamp', default: null, nullable: true })
  deletedAt: string;

  @BeforeInsert()
  private async insertPassword() {
    const salt = bcryptjs.genSaltSync(10);
    this.password = bcryptjs.hashSync(this.password, salt);
  }
}
