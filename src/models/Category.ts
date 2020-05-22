import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import Transaction from './Transaction';

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(() => Transaction, transaction => transaction.category)
  transaction: Transaction;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Category;
