import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './categories/controllers/categories.controller';
import { InvoicesController } from './invoices/controllers/invoices.controller';
import { CategoriesService } from './categories/services/categories.service';
import { InvoicesService } from './invoices/services/invoices.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, InvoicesController],
  providers: [AppService, CategoriesService, InvoicesService],
})
export class AppModule {}
