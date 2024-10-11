import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Template {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  templateName: string;

  @Column()
  thumbnail: string;

  @Column('text')
  html: string;


  @Column({ default: false })
  isOnlyForSubscribers: boolean;

  @Column({ default : 'template-sheet'})
  slug: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
