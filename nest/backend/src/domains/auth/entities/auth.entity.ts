import {
  BaseEntity,
  Column,
  Entity,
  Index,
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
}
