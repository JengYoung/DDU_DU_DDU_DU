import { ETodoTypes } from './../../../common/models/todos.model';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * @description
 * postgresql에서의 Column의 내부에는 다음과 같은 타입만 들어간다.
 * @see: https://typeorm.io/entities#column-types-for-postgres
 */
@Entity()
export class Todos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: ETodoTypes;

  @Column()
  todoId: string;

  @Column()
  content: string;

  @Column()
  completed: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
