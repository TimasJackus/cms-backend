import { ObjectIdColumn, Entity } from 'typeorm';
import { Transform } from 'class-transformer';

@Entity()
export class BaseEntity {
  @ObjectIdColumn()
  @Transform((value) => value.toString(), { toPlainOnly: true })
  id: string;
}
