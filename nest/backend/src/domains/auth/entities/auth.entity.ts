import { Todos } from 'src/domains/todos/entities/todos.entity';
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * @description
 * postgresql에서의 Column의 내부에는 다음과 같은 타입만 들어간다.
 * @see: https://typeorm.io/entities#column-types-for-postgres
 */
@Entity()
export class Auth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column()
  email: string;

  @Column()
  password: string;

  /**
   * INFO: TypeORM에서 Eager Relations관계를 설정해 두면, 상위 엔티티를 로드했을 때, 그 하위 엔티티까지 모두 로드되게 된다. 이는 Entity 클래스에서 eager 옵션을 true 로 두면 사용할 수 있다.
   * NOTE: 하위 엔티티가 무조건 가져와지기 때문에 상당히 편하다고 느낄 수 있지만, author를 사용할때 books가 필요하지 않은 모든 경우에 대해서도 books를 무조건 가져오기 때문에, 이또한 성능상 문제를 일으킬 수 있다.
   */
  @OneToMany(() => Todos, (todos) => todos.user, { eager: true })
  todos: Todos[];
}
