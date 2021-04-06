import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: TYPE_DATABASE,
  host: HOST,
  port:PORT,
  username: USER,
  password: PASSWORD,
  database: DATABASE,
  entities: [],
  autoLoadEntities:true,
  synchronize: true,
};
