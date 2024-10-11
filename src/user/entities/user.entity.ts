import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  photo: string;

  @Column()
  phone: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
