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

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default : 'user'})
  role: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ default: false })
  isVerified: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
