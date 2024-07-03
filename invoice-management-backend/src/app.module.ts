// src/app.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'password',
      database: 'nest',
      autoLoadModels: true,
      synchronize: true,
    }),
    InvoiceModule,
  ],
})
export class AppModule {}
