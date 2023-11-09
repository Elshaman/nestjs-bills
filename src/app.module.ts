import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './categories/categories.controller';
import { InvoicesController } from './invoices/invoices.controller';
import { CategoriesService } from './categories/categories.service';
import { InvoicesService } from './invoices/invoices.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, InvoicesController],
  providers: [AppService, CategoriesService, InvoicesService],
})
export class AppModule {}
