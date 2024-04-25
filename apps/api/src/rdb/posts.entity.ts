import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('posts')
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('varchar')
  content: string;

  @Column('varchar')
  writer: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamp',
    default: null,
    nullable: true,
  })
  updatedAt: string;

  @DeleteDateColumn({
    type: 'timestamp',
    default: null,
    nullable: true,
  })
  deletedAt: string;
}
