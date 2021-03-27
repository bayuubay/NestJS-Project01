import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Bayu1692!',
  database: 'taskmanagement',
  entities: [],
  autoLoadEntities:true,
  synchronize: true,
};
